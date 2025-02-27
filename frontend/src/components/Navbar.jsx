import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { LuSquarePlus, LuShoppingCart } from 'react-icons/lu';
import React from 'react';

const Navbar = () => {
  
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{base: "3xl", sm: "40"}}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          background="linear-gradient(to right, #00d1ff, #009aff)"
          bgClip="text"
        >
          <Link to='/'>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button fontSize={20} colorScheme="blue" variant="subtle">
            <LuSquarePlus />
          </Button>
          </Link>

        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar