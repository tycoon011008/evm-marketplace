import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Flex, Box } from '@chakra-ui/react';
import { Image, Button } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';

export default function Detail() {
    return (
        <div className="bg-gray">
            <MyNavbar />

            <Flex maxW={'8xl'} style={{margin: "auto"}} color={'white'}>
                <Box padding={10} flex={1}>
                    <Image
                        borderRadius='10px'
                        width={'fit-content'}
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Dan Abramov'
                    />
                    <div className='mt-3'>
                        <div className='flex justify-between'>
                        </div>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Description
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Detail
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Box>
                <Box padding={10} flex={1}>
                    <h3>Token Name</h3>
                    <h6>Owned by: 0x0215d2f02f15d1fd51ff1d2d2c2d1fd5fd1</h6>
                    <h6 className='mb-3'>Price: 50 ETH</h6>
                    <Button marginRight={10} variant='solid' colorScheme='blue'>
                        Buy Now
                    </Button>
                    <Button variant='solid' colorScheme='blue'>
                        Make Offer
                    </Button>
                    <h5 className='mt-4'>Offers</h5>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>From</Th>
                                    <Th>Offer Price</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>25.4</Td>
                                <Td>millimetres (mm)</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>30.48</Td>
                                <Td>centimetres (cm)</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>0.91444</Td>
                                <Td>metres (m)</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </div>
    )
}
