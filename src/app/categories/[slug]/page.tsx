import Banner from '@/app/_components/Banner';
import CategoriesList from '@/app/_components/CategoriesList';
import ProductList from '@/app/_components/Products';
import {
  getAllCategories,
  getProductsBySlug,
} from '@/service/category.service';
import React from 'react';
async function getData(slug: any) {
  const categories = await getAllCategories({ page: 1, limit: 30 })
    .then((res) => res?.data)
    .catch((err) => err);
  const products = await getProductsBySlug(slug, { page: 1, limit: 50 })
    .then((res) => res?.data)
    .catch((err) => err);

  return [categories, products];
}

export default async function Category({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [categories, products] = await getData(slug);

  return (
    <div>
      <Banner />

      <CategoriesList categories={categories} />
      <ProductList products={products.products} />
    </div>
  );
}
