import { getAllCategories } from '@/service/category.service';
import { getAllProducts } from '@/service/product.service';
import Products from './_components/Products';
import CategoriesList from './_components/CategoriesList';
import Banner from './_components/Banner';
async function getData() {
  const categories = await getAllCategories({ page: 1, limit: 30 })
    .then((res) => res?.data)
    .catch((err) => err);
  const products = await getAllProducts({ page: 1, limit: 50 })
    .then((res) => res?.data)
    .catch((err) => err);

  return [categories, products];
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [categories, products] = await getData();
  //
  return (
    <div>
      <Banner />
      <CategoriesList categories={categories} />
      <Products products={products?.products} />
    </div>
  );
}
