import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Avatar,
    Dropdown,
    DropdownTrigger, DropdownMenu, DropdownItem, ButtonGroup
} from "@heroui/react";

import burger from "../../../Images/Navbar/burger.svg"
import kfc from "../../../Images/Navbar/KFC_logo.svg.png"
import mac from "../../../Images/Navbar/Mac_logo.png"
import logo from "../../../Images/Navbar/img.png"
import bk from "../../../Images/Navbar/Burger_King_2020.svg.png"

import React from 'react';

const MyNavbar = () => {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Dropdown placement="bottom" className={"w-fit"}>
                    <DropdownTrigger>
                        <Button className={"bg-transparent pt-6 pb-8 mt-2"} radius={"full"}>
                            <img src={logo} className={"w-18 h-18 mb-1"}/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile">
                            <div className={"flex flex-row gap-10"}>
                                <img src={kfc} className={"w-10 h-10 mr-1"}/>
                                <Button className="bg-gradient-to-br from-red-700 to-red-400 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]" radius={"full"}>KFC</Button>
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
                    <Button className="bg-transparent">Analytic</Button>
                    <Button className="bg-transparent">History</Button>
                </NavbarItem>

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
                        <DropdownItem key="settings">My Favorites</DropdownItem>
                        <DropdownItem key="configurations">My Profile</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}

export default MyNavbar;