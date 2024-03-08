"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HomeIcon, InfoSquareIcon, SendIcon } from "../icons/curved";
import { Text } from "../ui/Text";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      label: "About",
      href: "/about",
      icon: <InfoSquareIcon />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <SendIcon />,
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/logos/logo.svg"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            priority
            quality={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={`${item.label}`}>
            <Link
              className="flex flex-row gap-2 justify-center items-center"
              href={item.href}
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/register">Sign up</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.label}`}>
            <Link
              className="flex flex-row gap-2 justify-center items-center"
              href={item.href}
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
