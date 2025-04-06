import {
  getAllCategories,
  getProductsBySlug,
} from '@/service/category.service';
import Products from './_components/Products';
import CategoriesList from './_components/CategoriesList';
import Banner from './_components/Banner';
async function getData() {
  try {
    const categories = await getAllCategories({ page: 1, limit: 30 })
      .then((res) => res?.data || [])
      .catch((err) => {
        console.error('Error fetching categories:', err);
        return [];
      });

    const productsByCategory = await Promise.all(
      categories?.map(async (cat: any) => {
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

export default async function Home() {
  const [categories, productsByCategory] = await getData();

  return (
    <div>
      <Banner />
      <CategoriesList categories={categories} />
      <Products productsByCategory={productsByCategory} />
    </div>
  );
}
