import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ChevronDown, Grip, HelpCircle} from "lucide-react";
import Link from "next/link";

function Header() {
    return (
        // 'w-full' asegura que ocupe todo el ancho. 'sticky top-0' opcional si quieres que baje contigo.
        <header className="w-full bg-black text-white shadow-md">
            <div className="flex h-16 w-full items-center justify-between px-6">
                {/* Lado Izquierdo: Logo y Título */}
                <div className="flex items-center gap-4">
                    <Link href='/' className="flex cursor-pointer flex-col items-center leading-none">
            <span className="font-serif text-xl font-bold tracking-widest text-white">
              BYU
            </span>
                        <span className="font-sans text-[0.55rem] font-semibold tracking-[0.2em] text-gray-300">
              IDAHO
            </span>
                    </Link>

                    <div className="h-8 w-px bg-gray-700"/>
                    <span className="text-xl font-normal text-gray-100">I-Plan</span>
                </div>

                {/* Lado Derecho: Menú y Perfil */}
                <div className="flex items-center gap-4">
                    <button
                        className="flex items-center gap-2 rounded bg-[#333333] px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-700 transition-colors">
                        <Grip className="h-4 w-4"/>
                        <span>Menu</span>
                        <ChevronDown className="h-3 w-3 opacity-70"/>
                    </button>

                    <button
                        className="rounded-full p-1 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        <HelpCircle className="h-6 w-6"/>
                    </button>

                    <div className="h-8 w-[1px] bg-gray-800"/>

                    <div
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-900 p-1 rounded-md transition-colors">
                        <Avatar className="h-8 w-8 border border-gray-600">
                            <AvatarImage
                                src="https://assets.study-with-me.org/studywithme-org-bucket-europe/profile.webp"
                                alt="User"/>
                            <AvatarFallback className="bg-gray-700 text-xs text-white">JS</AvatarFallback>
                        </Avatar>
                        <div className="hidden flex-col text-xs sm:flex">
                            <span className="text-gray-400">Hello,</span>
                            <span className="font-semibold text-gray-200">Juan Sebastian ...</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;