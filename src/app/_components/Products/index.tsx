import { Box, Container, Heading, HStack, Separator } from '@chakra-ui/react';
import ProductCard from './_components/ProductCard';
import { ICategory, IProduct } from '@/types';

const ProductList = ({
  productsByCategory,
}: {
  productsByCategory?: {
    category: ICategory;
    products: IProduct[];
  }[];
}) => {
  return (
    <>
      {productsByCategory?.map(({ category, products }) => (
        <Box key={`${category.slug}-${category.url}`}>
          <Container>
            <Heading
              size='lg'
              fontSize={32}
              fontWeight={700}
              color='white'
              borderLeft={'4px solid'}
              borderColor={'primary'}
              my={'50px'}
              pl='19px'
            >
              {category.name}
            </Heading>
          </Container>
          <HStack
            px={3}
            gap={5}
            mt={4}
            overflow={'scroll'}
            scrollbar={'hidden'}
          >
            {products.map((product: any) => (
              <Box key={product.id} w={'full'}>
                <ProductCard data={product} />
              </Box>
            ))}
          </HStack>
          <Separator mt={'50px'} />
        </Box>
      ))}
    </>
  );
};

export default ProductList;
