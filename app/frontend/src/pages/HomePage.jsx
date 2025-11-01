import { Container, VStack, Text, SimpleGrid, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useProductStore } from '../store/product.js';
import ProductCard from '../components/ProductCard.jsx';
import { LuRocket } from 'react-icons/lu';

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW={Container.xl} py={8}>
      <VStack spacing={8}>
        <Text
          mb={4}
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          background="linear-gradient(to right, #00d1ff, #009aff)"
          bgClip="text"
        >
          <HStack>Current Products <LuRocket color='#009aff' fill='#009aff'/></HStack> 
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
          {products.slice().reverse().map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        {(products.length === 0) && (
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500" pt={10}>
          No Products Found {" "}
            <Link to={"/create"}>
              <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage