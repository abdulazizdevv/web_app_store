import { getAllCategories } from '@/service/category.service';
import CategoriesList from '../_components/CategoriesList';
import Checkout from '../_pages/Checkout';
async function getData() {
  try {
    const categories = await getAllCategories({ page: 1, limit: 30 })
      .then((res) => res?.data || [])
      .catch((err) => {
        console.error('Error fetching categories:', err);
        return [];
      });

    return [categories];
  } catch (error) {
    console.log(error);

    return [[], []];
  }
}

export default async function CheckoutPage() {
  const [categories] = await getData();

  return (
    <div>
      <CategoriesList categories={categories} />
      <Checkout />
    </div>
  );
}
