import { Box, HStack } from '@chakra-ui/react';
import ProductCard from './_components/ProductCard';
import { IProduct } from '@/types';

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <HStack gap={5} mt={4} overflow={'scroll'} scrollbar={'hidden'}>
      {products?.map((item) => (
        <Box key={item.id} w={'full'}>
          <ProductCard data={item} />
        </Box>
      ))}
    </HStack>
  );
};

export default ProductList;
