import { Text } from "@/components/common/ui/Text";
import {
    Avatar,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen flex-col">
      <Navbar isBordered>
        <NavbarContent>
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

        <NavbarContent justify="end">
          <NavbarItem className="flex flex-row gap-2 items-center justify-center">
            <Avatar src="/logos/logo.svg" alt="Avatar" />
            <div className="flex flex-col">
              <Text className="text-sm">Tui ten la HAHA</Text>
              <Text className="text-xs">Admin</Text>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </main>
  );
}
