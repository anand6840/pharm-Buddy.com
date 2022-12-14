import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  Spacer,
  Button,
  Select,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";

const SingleProduct = () => {
  const property = {
    reviewCount: 242,
    rating: 3,
  };
  return (
    <>
      <Box border="1px solid black" w="90%" m="auto">
        <Text>Horlicks Health & Nutrition Drink Plastic Container 2 Kg</Text>
    {/* Main box */}
        <Box mt="30px" display='flex'>
          <Box border="1px solid red" w="70%">

            {/* Image and Description box */}
            <Box display='flex'>
              <Box border="1px solid red" w="30%" h="280px" p="10px">
                <Image
                  h="100%"
                  src="https://cdn01.pharmeasy.in/dam/products_otc/Q28452/horlicks-health-nutrition-drink-plastic-container-2-kg-2-1655880678.jpg?dim=700x0&dpr=1&q=100"
                  alt="Dan Abramov"
                />
              </Box>
              <Box border="1px solid red" w="70%" p="20px">
                <Heading
                  size="sm"
                  fontSize="20px"
                  fontWeight="bold"
                  mt="6px"
                  color="rgb(79,88,104)"
                >
                  Horlicks Health & Nutrition Drink Plastic Container 2 Kg
                </Heading>
                <Text mt="10px" mb="10px" color="teal">
                  Visit HORLIC store{" "}
                </Text>
                <Flex border="1px solid red">
                  <Box border="1px solid black">
                    <Box display="flex" mt="15px" mb="15px" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <BsStarFill
                            fontSize="22px"
                            key={i}
                            color={
                              i < property.rating ? "teal.500" : "gray.300"
                            }
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        ({property.reviewCount} ratings)
                      </Box>
                    </Box>

                    <Flex mt="10px">
                      <Heading size="sm" fontWeight="bold" fontSize="20px">
                        ₹{`254.40`}
                      </Heading>
                      <Text color="gray.500" ml="10px">
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{`123`}
                        </span>
                      </Text>
                      <Text
                        ml="10px"
                        bg="rgb(249,140,142)"
                        pl="5px"
                        pr="5px"
                        color="white"
                      >
                        4% OFF
                      </Text>
                    </Flex>
                    <Text fontSize="13px" color="gray.500">
                      Inclusive of all taxes
                    </Text>
                    <Text fontSize="15px"> Delivery by 17 Dec - 18 Dec</Text>
                  </Box>
                  <Spacer />
                  <Box mt="25px" mr="100px">
                    {/* <Button colorScheme='teal' p='6' fontSize='20px'>Add To Cart    </Button> */}
                    <Select placeholder="Select option" w="150px">
                      <option value="option1"> 1</option>
                      <option value="option2"> 2</option>
                      <option value="option3"> 3</option>
                      <option value="option4"> 4</option>
                      <option value="option5"> 5</option>
                      <option value="option6"> 6</option>
                    </Select>
                  </Box>
                </Flex>
              </Box>
            </Box>


            {/* Descripion in bottom section   */} 

            <Box border="1px solid black" p="20px">
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="6px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Description
              </Heading>
              <Text>
                Horlicks Classic Malt Nutrition Drink is a health drink that has
                nutrients to support immunity. Horlicks is clinically proven to
                improve 5 signs of growth and to make kids taller, stronger and
                sharper. Scientifically proven to improve the power of milk,
                Horlicks products are available in many delicious flavours and
                can be consumed by people of all ages. Its unique formula is
                most useful for growing children as it helps in their overall
                development. The Horlicks Classic Malt Health Drink is perfect
                for every member of the family.
              </Text>
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="20px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Benefits
              </Heading>
              <UnorderedList>
                <ListItem>
                  It is a great health drink that has nutrients to support
                  immunity.
                </ListItem>
                <ListItem>
                  Horlicks Classic is clinically proven to improve 5 signs of
                  growth. Horlicks increase the density of minerals such as
                  calcium in bones to give children bigger and stronger bones.
                </ListItem>
                <ListItem>Horlicks Classic Malt is also clinically proven to make kids taller & stronger. It helps to increase lean tissue which makes children stronger. Horlicks contains important micronutrients (vitamin B6, B12, C, D, calcium, copper, folic acid, iron, selenium and zinc amongst others) and is clinically proven to help children grow taller and stronger when included as part of their regular diet</ListItem>
                <ListItem>Helps improve attention and concentration to make your child sharper</ListItem>
                <ListItem>Horlicks Nutrition Drink improves the power of milk</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box border="1px solid green" w="30%" p="20px" >
            <Heading
              size="sm"
              fontSize="20px"
              fontWeight="bold"
              mt="6px"
              color="rgb(79,88,104)"
            >
              3 Items in Cart
            </Heading>
            <Button colorScheme="teal" w="100%" fontSize="20px" mt="20px">
              View Cart{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
