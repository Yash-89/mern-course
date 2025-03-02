import { Box, Image, Heading, Text, HStack, VStack, Button, Input } from '@chakra-ui/react';
import { LuPencil, LuDelete } from 'react-icons/lu';
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
        console.log("Success: ", success, "Message: ", message);
    }

    const handleUpdateProduct = async (pid) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
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
                    <Heading as="h3" size="md" textAlign="center">
                        {product.name}
                    </Heading>

                    <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
                        ₹ {product.price}
                    </Text>

                    <HStack spacing={2}>
                    <DialogRoot>
                        <DialogTrigger>
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
                                <DialogActionTrigger>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <DialogActionTrigger asChild>
                                    <Button onClick={() => handleUpdateProduct(product._id)}>Save</Button>
                                </DialogActionTrigger>
                            </DialogFooter>
                        </DialogContent>
                    </DialogRoot>


                        <Button
                            variant="outline"
                            bg="#FCA5A5"
                            _hover={{ bg: "#F87171" }}
                            _active={{ transform: "scale(0.975)" }}
                            onClick={() => handleDeleteProduct(product._id)}
                        >
                            <LuDelete color='black' />
                        </Button>
                    </HStack>
                </Box>
            </Box>
        </>
    );
}

export default ProductCard