import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { LuSquarePlus, LuShoppingCart } from 'react-icons/lu';
import React from 'react';

const Navbar = () => {
  
  return (
    <Container maxW={"1140px"} px={4} py={2}>
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
          background="linear-gradient(to right, #00f1ff, #009aff)"
          bgClip="text"
        >
          <Link to='/'>
            <HStack>
              Product Store <LuShoppingCart color='#0095ff' fill='#0095ff'/>
            </HStack>
          </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button fontSize={20} colorScheme="blue" variant="surface">
            <LuSquarePlus />
          </Button>
          </Link>

        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar