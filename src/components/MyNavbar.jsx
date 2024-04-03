import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import ConnectButton from './ConnectButton';
import AccountModal from './AccountModal';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='flex align-center' href="/">
                        <Image className='mb-1' src='logo.png' width={50} height={50} rounded />
                        <h3>Commune Marketplace</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-center' id="basic-navbar-nav">
                        <Nav>
                            <Link className='nav' to="/">Home</Link>
                            <Link className='nav' to="/mynft">MyNFT</Link>
                            <ConnectButton handleOpenModal={onOpen} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <AccountModal isOpen={isOpen} onClose={onClose} />
        </div>
    )
}
