import Banner from '@/app/_components/Banner';
import CategoriesList from '@/app/_components/CategoriesList';
import ProductList from '@/app/_components/Products';
import {
  getAllCategories,
  getProductsBySlug,
} from '@/service/category.service';
import React from 'react';

async function getData(slug: string) {
  try {
    const categories = await getAllCategories({ page: 1, limit: 30 })
      .then((res) => res?.data || [])
      .catch((err) => {
        console.error('Error fetching categories:', err);
        return [];
      });

    const filteredCategory = categories.filter((el: any) => el.slug === slug);

    const productsByCategory = await Promise.all(
      filteredCategory.map(async (cat: any) => {
        const products = await getProductsBySlug(cat.slug, {
          page: 1,
          limit: 50,
        });
        return {
          category: cat,
          products: products?.data?.products || [],
        };
      })
    );

    return [categories, productsByCategory];
  } catch (error) {
    console.log(error);

    return [[], []];
  }
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const [categories, productsByCategory] = await getData(slug);

  return (
    <>
      <Banner />
      <CategoriesList categories={categories} />
      <ProductList productsByCategory={productsByCategory} />
    </>
  );
}
