import {ChevronDown, Grip, HelpCircle} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

function Header() {
    return (
        <header className="flex h-16 w-full items-center justify-between bg-black px-4 text-white shadow-md">
            {/* Lado Izquierdo: Logo y Título */}
            <div className="flex items-center gap-4">
                {/* Simulación del Logo BYU-Idaho (Texto) */}
                <div className="flex cursor-pointer flex-col items-center leading-none">
          <span className="font-serif text-xl font-bold tracking-widest text-white">
            BYU
          </span>
                    <span className="font-sans text-[0.55rem] font-semibold tracking-[0.2em] text-gray-300">
            IDAHO
          </span>
                </div>

                {/* Separador vertical */}
                <div className="h-8 w-[1px] bg-gray-700"/>

                {/* Nombre de la App */}
                <span className="text-xl font-normal text-gray-100">I-Plan</span>
            </div>

            {/* Lado Derecho: Menú y Perfil */}
            <div className="flex items-center gap-4">
                {/* Botón Menu */}
                <button
                    className="flex items-center gap-2 rounded bg-[#333333] px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-700 transition-colors">
                    <Grip className="h-4 w-4"/>
                    <span>Menu</span>
                    <ChevronDown className="h-3 w-3 opacity-70"/>
                </button>

                {/* Icono de Ayuda */}
                <button className="rounded-full p-1 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    <HelpCircle className="h-6 w-6"/>
                </button>

                {/* Separador sutil */}
                <div className="h-8 w-[1px] bg-gray-800"/>

                {/* Sección de Perfil */}
                <div
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-900 p-1 rounded-md transition-colors">
                    <Avatar className="h-8 w-8 border border-gray-600">
                        {/* Puedes poner una url real aquí en src */}
                        <AvatarImage src="https://assets.study-with-me.org/studywithme-org-bucket-europe/profile.webp" alt="User"/>
                        <AvatarFallback className="bg-gray-700 text-xs text-white">JS</AvatarFallback>
                    </Avatar>
                    <div className="hidden flex-col text-xs sm:flex">
                        <span className="text-gray-400">Hello,</span>
                        <span className="font-semibold text-gray-200">Juan Sebastian ...</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;