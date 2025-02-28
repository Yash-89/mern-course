import { Container, VStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
  return (
    <Container maxW={Container.xl} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          background="linear-gradient(to right, #00d1ff, #009aff)"
          bgClip="text"
        >
          Current Products
        </Text>
        <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500" pt={10}>
          No Products Found {" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage