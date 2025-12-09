"use client"
import { use, useState } from "react"
import { usePathname } from "next/navigation" //diz qual rota está
import clsx from "clsx"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Banknote, CalendarCheck2, ChevronLeft, ChevronRight, Folder, List, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import logoImg from "../../../../../public/logo.png"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() //pega a rota atual
    const [isOpen, setIsOpen] = useState(false) //estado do menu mobile 

    return (
        <div className="flex min-h-screen w-full">

            <aside className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full", {
                "w-20": isOpen,
                "w-64": !isOpen,
                "hidden md:flex md:fixed": true
            })}>

                <div className="mb-6 mt-4">
                    {!isOpen && (
                        <Image
                            src={logoImg}
                            alt="logo do medicpro"
                            priority
                            quality={100}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    )}
                </div>
                
                <Button
                    className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? <ChevronLeft className="w-12 h-12" /> : <ChevronRight className="w-5 h-5" />}
                </Button>

                {/*Mostrando apenas quando a sidebar estiver fechada*/}
                {isOpen && (
                    <nav className=" flex flex-col gap-1 oveflow-hidden items-center mt-2">
                        <SidebarLink
                            href="/dashboard"
                            label="Agendamentos"
                            pathname={pathname}
                            isOpen={isOpen}
                            icon={<CalendarCheck2 className="w-6 h-6" />}
                        />

                        <SidebarLink
                            href="/dashboard/services"
                            label="Serviços"
                            pathname={pathname}
                            isOpen={isOpen}
                            icon={<Folder className="w-6 h-6" />}
                        />
                        <SidebarLink
                            href="/dashboard/profile"
                            label="Perfil"
                            pathname={pathname}
                            isOpen={isOpen}
                            icon={<Settings className="w-6 h-6" />}
                        />

                        <SidebarLink
                            href="/dashboard/plans"
                            label="Planos"
                            pathname={pathname}
                            isOpen={isOpen}
                            icon={<Banknote className="w-6 h-6" />}
                        />
                    </nav>

                )}

                <Collapsible open={!isOpen}>

                    <CollapsibleContent>
                        <nav className=" flex flex-col gap-1 oveflow-hidden">
                            <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                                Painel
                            </span>

                            <SidebarLink
                                href="/dashboard"
                                label="Agendamentos"
                                pathname={pathname}
                                isOpen={isOpen}
                                icon={<CalendarCheck2 className="w-6 h-6" />}
                            />

                            <SidebarLink
                                href="/dashboard/services"
                                label="Serviços"
                                pathname={pathname}
                                isOpen={isOpen}
                                icon={<Folder className="w-6 h-6" />}
                            />

                            <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
                                Configurações
                            </span>

                            <SidebarLink
                                href="/dashboard/profile"
                                label="Perfil"
                                pathname={pathname}
                                isOpen={isOpen}
                                icon={<Settings className="w-6 h-6" />}
                            />

                            <SidebarLink
                                href="/dashboard/plans"
                                label="Planos"
                                pathname={pathname}
                                isOpen={isOpen}
                                icon={<Banknote className="w-6 h-6" />}
                            />

                        </nav>
                    </CollapsibleContent>

                </Collapsible>

            </aside>

            <div className={clsx("flex flex-1 flex-col transition-all duraation-300", {
                "md:ml-20": isOpen,
                "md:ml-64": !isOpen,
            })}>

                <header className="md:hidden flex items-center justify-between border-b px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
                    <Sheet>
                        <div className="flex items-center gap-4 ">
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <List className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>

                            <h1 className="text-base md:text-lg font-semibold">
                                Menu MedicPRO
                            </h1>
                        </div>

                        <SheetContent side="right" className="sm:max-w-xs text-black">
                            <div className="m-8">
                                <SheetTitle className="pb-3">MedicPro</SheetTitle>
                                <SheetDescription>
                                    Menu administrativo
                                </SheetDescription>
                            </div>


                            <nav className="grid gap-2 text-base">
                                <SidebarLink
                                    href="/dashboard"
                                    label="Agendamentos"
                                    pathname={pathname}
                                    isOpen={isOpen}
                                    icon={<CalendarCheck2 className="w-6 h-6" />}
                                />

                                <SidebarLink
                                    href="/dashboard/services"
                                    label="Serviços"
                                    pathname={pathname}
                                    isOpen={isOpen}
                                    icon={<Folder className="w-6 h-6" />}
                                />

                                <SidebarLink
                                    href="/dashboard/profile"
                                    label="Perfil"
                                    pathname={pathname}
                                    isOpen={isOpen}
                                    icon={<Settings className="w-6 h-6" />}
                                />

                                <SidebarLink
                                    href="/dashboard/plans"
                                    label="Planos"
                                    pathname={pathname}
                                    isOpen={isOpen}
                                    icon={<Banknote className="w-6 h-6" />}
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>


                </header>

                <main className="flex-1 py-4 px-2 md:p-6">
                    {children} {/* Renderiza conteúdo principal da dashboard */}
                </main>

            </div>

        </div>
    )
}

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    pathname: string;
    isOpen: boolean;
}

function SidebarLink({ href, icon, label, pathname, isOpen }: SidebarLinkProps) {
    return (
        <Link
            href={`${href}`}
        >
            <div className={clsx("flex items-center gap-2 px-3 py-2 mx-5 rounded-md transition-colors",
                {
                    "text-white bg-blue-500": pathname === href,
                    "text-gray-700 hover:bg-gray-100": pathname !== href,


                }
            )}>
                <span className="w-6 h-6">{icon}</span>
                {!isOpen && <span>{label}</span>}
            </div>
        </Link>
    )
}