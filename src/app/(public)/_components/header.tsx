"use client";
import { useState } from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const session = false;


    const navItems = [
        { href: "#profissionais", label: "Profissionais" },
    ]


    const NavLinks = () => (
        <>
            {navItems.map((items) => (
                <Button
                onClick={() => setIsOpen(false)}
                    key={items.href}
                    asChild
                    className="bg-transparent hover:bg-transparent text-black shadow-none"
                >
                    <Link href={items.href} className="text-base">
                        {items.label}
                    </Link>
                </Button>
            ))}

            {session ?(
                <Link
                    href="/dashboard"
                    className="flex items-center justify-center gap-2"
                >
                    Painel da clínica
                </Link>
            ) : (
                <Button>
                    <LogIn/>
                    Login
                </Button>
            )}
        </>
    )

    return (
        <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 justify-center bg-white">
            <div className="container mx-auto flex items-center justify-between">

                <Link href="/" className="text-3xl font-bold text-zinc-900">
                    Medic<span className="text-emerald-500">PRO</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks />
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="text-black hover:bg-transparent cursor-pointer"
                            variant="ghost"
                            size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-60 sm:w-[300px] z-9999">
                        <SheetHeader></SheetHeader>

                        <SheetTitle className="ml-4">
                            Menu
                        </SheetTitle>
                        <SheetDescription className="ml-4">
                            Veja nossos links
                        </SheetDescription>


                        <nav className="flex flex-col spane-y-4 mt-6">
                            <NavLinks />
                        </nav>

                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
