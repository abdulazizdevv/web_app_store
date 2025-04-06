import { ICategory } from '@/types';
import { Box, Container, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const CategoriesList = ({ categories }: { categories: ICategory[] }) => {
  return (
    <Box borderBottom={'1px solid #FFFFFF1A'}>
      <Container>
        <HStack
          py={'28px'}
          gap={6}
          w={'full'}
          overflow={'scroll'}
          scrollbar={'hidden'}
        >
          {categories?.map((category) => (
            <Link
              style={{
                width: '100%',
              }}
              href={`/categories/${category.slug}`}
              key={category.slug}
            >
              <Text
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                w={'full'}
                fontSize={18}
                color={'light.300'}
              >
                {category.name}
              </Text>
            </Link>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default CategoriesList;
