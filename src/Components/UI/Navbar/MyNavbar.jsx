import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

import React from 'react';

const MyNavbar = () => {
    return (
        <Navbar className=" bg-primary text-black">
            <NavbarBrand>
                <p>Some</p>
            </NavbarBrand>
            <NavbarContent className="flex" justify="center">
                <NavbarItem>
                    <Button href="#">Features</Button>
                </NavbarItem>
                <Button href="#">Features</Button>

            </NavbarContent>
        </Navbar>
    );
};

export default MyNavbar;