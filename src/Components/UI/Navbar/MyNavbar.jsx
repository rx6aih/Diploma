import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Avatar,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    ButtonGroup,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    useDisclosure , Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";

import kfc from "../../../Images/Navbar/KFC_logo.svg.png"
import mac from "../../../Images/Navbar/Mac_logo.png"
import bk from "../../../Images/Navbar/Burger_King_2020.svg.png"
import logo from "../../../Images/Navbar/FastFoodLogo2.webp"
import menuWord from "../../../Images/Navbar/MenuWord1.webp"
import React from 'react';
import Profile from "../../Modal/Profile/Profile.jsx";
import kitty from "../../../Images/Profile/kitty4.jpg"

const MyNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const menuItems = [
        "My Favorites",
        "My Profile",
        "Log Out",
    ];
    return (
        <div>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarBrand>
                    <Dropdown placement="bottom" className={"w-fit"}>
                        <DropdownTrigger>
                            <Button className={"bg-transparent pt-8 pb-8 mt-2 mb-2"} radius={"full"}>
                                <a href={"/home"}>
                                    <img src={logo} className={"w-20 h-24 mb-1"}/>
                                </a>
                                <img src={menuWord} className={"w-20 h-24 mt-2"}/>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile">
                                <a href={"/kfc"}>
                                    <div className={"flex flex-row gap-10"}>
                                        <img src={kfc} className={"w-10 h-10 mr-1"}/>
                                        <Button className="bg-gradient-to-br from-red-700 to-red-400 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]" radius={"full"}>KFC</Button>
                                    </div>
                                </a>
                            </DropdownItem>
                            <DropdownItem key="settings">
                                <a href={"/mac"}>
                                    <div className={"flex flex-row gap-10"}>
                                        <img src={mac} className={"w-10 h-8 mt-1 mr-1"}/>
                                        <Button className={"bg-gradient-to-bl from-yellow-400 to-orange-600 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]"} radius={"full"}>MAC</Button>
                                    </div>
                                </a>
                            </DropdownItem>
                            <DropdownItem key="team_settings">
                                <a href={"/bk"}>
                                    <div className={"flex flex-row gap-10"}>
                                        <img src={bk} className={"w-10 h-8 mt-1 mr-1"}/>
                                        <Button className={"bg-gradient-to-tl from-amber-700 to-orange-600 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]"} radius={"full"}>BK</Button>
                                    </div>
                                </a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Button className="bg-transparent"><a href={"/analytic"}>Аналитика</a></Button>
                        <Button className="bg-transparent"><a href={"/history"}>История</a></Button>
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
                                className="transition-transform w-10 h-10"
                                color="default"
                                name="Jason Hughes"
                                size=""
                                src={kitty}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="settings" onPress={onOpen}>Мой Профиль</DropdownItem>
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"} className={"h-[44em] rounded-3xl overflow-visible"}>
                <ModalContent>
                    {(onClose) =>(
                        <Profile/>
                    )}
                </ModalContent>
            </Modal>
        </div>

    );
}

export default MyNavbar;