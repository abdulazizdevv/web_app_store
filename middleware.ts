import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORS headerlarini qo'shish
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // OPTIONS so'rovlarini to'g'ri yo'naltirish
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Faqat /api/auth/login yo'liga POST so'rovlarni qabul qilish
  if (req.method === 'POST' && req.query.auth?.includes('login')) {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        req.body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Cookie ni o'rnatish (agar kerak bo'lsa)
      if (response.data.token) {
        res.setHeader(
          'Set-Cookie',
          `token=${response.data.token}; Path=/; HttpOnly`
        );
      }

      return res.status(200).json(response.data);
    } catch (error: any) {
      console.error('Error in login proxy:', error);
      return res
        .status(error.response?.status || 500)
        .json(error.response?.data || { message: 'Login failed' });
    }
  }

  return res.status(404).json({ message: 'Not found' });
}
