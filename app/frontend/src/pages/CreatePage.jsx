import { Container, VStack, Heading, Box, Input, Button, Flex } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster.jsx";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
      toaster.create({
        title: "Success",
        type: "success",
        description: message,
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Error",
        type: "error",
        description: message,
        isClosable: true,
      });
    }
    console.log("Success: ", success, "Message: ", message);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || "" : value
    }));
  }

  return (
    <Container maxW="container.sm" mt={8}>
      <Flex flex={1} justify="center" align="center">
      <VStack w="xl" spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Create New Product
        </Heading>
        
        <Box w="full" p={6} rounded="lg" shadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={onChangeHandler}
            />

            <Input
              placeholder="Product Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={onChangeHandler}
            />

            <Input
              placeholder="Product Image URL"
              name="image"
              value={newProduct.image}
              onChange={onChangeHandler}
            />

            <Button colorscheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>

          </VStack>
        </Box>
      </VStack>
      </Flex>
    </Container>
  )
}

export default CreatePage