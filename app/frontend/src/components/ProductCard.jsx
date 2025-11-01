import { Box, Image, Heading, Text, HStack, VStack, Button, Input } from '@chakra-ui/react';
import { LuPencil, LuDelete } from 'react-icons/lu';
import { toaster } from './ui/toaster';
import React, { useState } from 'react'
import { useColorModeValue } from './ui/color-mode';
import { useProductStore } from '../store/product.js';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogActionTrigger
} from "@/components/ui/dialog";

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.950");
    const { deleteProduct, updateProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (success)
            toaster.create({
                title: "Success",
                type: "success",
                description: message,
                isClosable: true
            })
        else
            toaster.create({
                title: "Error",
                type: "error",
                description: message,
                isClosable: true
            })
        console.log("Success: ", success, "Message: ", message);
    }

    const handleUpdateProduct = async (pid) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if (success)
            toaster.create({
                title: "Success",
                type: "success",
                description: message,
                isClosable: true
            })
        else
            toaster.create({
                title: "Error",
                type: "error",
                description: message,
                isClosable: true
            })
        console.log("Success: ", success, "Message: ", message);
    }

    return (
        <>
            <Box
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.025)", shadow: "xl" }}
                boxSizing="border-box"
                m={4}
                bg={bg}
            >
                <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" _hover={{ transform: "scale(1.02)" }} transition="all 0.3s" />
                <Box p={4}>
                    <Heading as="h3" size="md" textAlign="center" mb={2}>
                        {product.name}
                    </Heading>

                    <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
                        ₹ {product.price}
                    </Text>

                    <HStack spacing={2}>

                    <DialogRoot>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                bg="#7DD3FC"
                                _hover={{ bg: "#38BDF8" }}
                                _active={{ transform: "scale(0.975)" }}
                            >
                                <LuPencil color='black' />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Update Product</DialogTitle>
                                <DialogCloseTrigger />
                            </DialogHeader>
                            <DialogBody>
                                <VStack spacing={4}>
                                    <Input
                                        placeholder="Product Name"
                                        name="name"
                                        value={updatedProduct.name}
                                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Product Price"
                                        name="price"
                                        type="number"
                                        value={updatedProduct.price}
                                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Product Image URL"
                                        name="image"
                                        value={updatedProduct.image}
                                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                    />
                                </VStack>
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <DialogActionTrigger asChild>
                                    <Button onClick={() => handleUpdateProduct(product._id)}>Save</Button>
                                </DialogActionTrigger>
                            </DialogFooter>
                        </DialogContent>
                    </DialogRoot>

                    <DialogRoot>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                bg="#FCA5A5"
                                _hover={{ bg: "#F87171" }}
                                _active={{ transform: "scale(0.975)" }}
                            >
                                <LuDelete color='black' />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Delete Product</DialogTitle>
                                <DialogCloseTrigger />
                            </DialogHeader>
                            <DialogBody>
                                <Text>Are you sure you want to Delete this product?</Text>
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <DialogActionTrigger asChild>
                                    <Button color="red" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                                </DialogActionTrigger>
                            </DialogFooter>
                        </DialogContent>
                    </DialogRoot>

                    </HStack>
                </Box>
            </Box>
        </>
    );
}

export default ProductCard