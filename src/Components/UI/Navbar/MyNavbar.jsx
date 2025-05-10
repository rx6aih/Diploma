import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Avatar,
    Dropdown,
    DropdownTrigger, DropdownMenu, DropdownItem, ButtonGroup, NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@heroui/react";

import kfc from "../../../Images/Navbar/KFC_logo.svg.png"
import mac from "../../../Images/Navbar/Mac_logo.png"
import bk from "../../../Images/Navbar/Burger_King_2020.svg.png"

import logo from "../../../Images/Navbar/FastFoodLogo2.webp"
import menuWord from "../../../Images/Navbar/MenuWord1.webp"

import React from 'react';

const MyNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "My Favorites",
        "My Profile",
        "Log Out",
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Dropdown placement="bottom" className={"w-fit"}>
                    <DropdownTrigger>
                        <Button className={"bg-transparent pt-8 pb-8 mt-2 mb-2"} radius={"full"}>
                            <img src={logo} className={"w-20 h-24 mb-1"}/>
                            <img src={menuWord} className={"w-20 h-24 mt-2"}/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile">
                            <div className={"flex flex-row gap-10"}>
                                <img src={kfc} className={"w-10 h-10 mr-1"}/>
                                <Button className="bg-gradient-to-br from-red-700 to-red-400 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]" radius={"full"}><a href={"/kfc"}>KFC</a></Button>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="settings">
                            <div className={"flex flex-row gap-10"}>
                                <img src={mac} className={"w-10 h-8 mt-1 mr-1"}/>
                                <Button className={"bg-gradient-to-bl from-yellow-400 to-orange-600 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]"} radius={"full"}>MAC</Button>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="team_settings">
                            <div className={"flex flex-row gap-10"}>
                                <img src={bk} className={"w-10 h-8 mt-1 mr-1"}/>
                                <Button className={"bg-gradient-to-tl from-amber-700 to-orange-600 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]"} radius={"full"}>BK</Button>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Button className="bg-transparent">Аналитика</Button>
                    <Button className="bg-transparent">История</Button>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform p-5"
                            color="default"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="settings">Мой Профиль</DropdownItem>
                        <DropdownItem key="configurations">Мои Избранные</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Выйти
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default MyNavbar;