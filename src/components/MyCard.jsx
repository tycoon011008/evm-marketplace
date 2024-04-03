import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

export default function MyCard() {
    return (
        <Card className='m-3 bg-white-alpha' maxW='sm'>
            <CardBody>
                <Link to={'/detail'}>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Link>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This is great nft token for evm.
                    </Text>
                    <Text color='white' fontSize='2xl'>
                        0.2 ETH
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='flex justify-end'>
                <ButtonGroup className='flex' spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
