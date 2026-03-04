'use client'

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full z-50 top-0 bg-transparent">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" relative flex justify-between items-center h-22">
                    {/* Logo */}
                    <div className={`z-10 shrink-0 flex items-center ${isOpen ? 'text-black' : 'text-white'}`}>
                        <Link href="/" className="text-2xl font-bold">
                            RM.Code
                        </Link>
                    </div>

                    {/* Links Desktop */}
                    <ul className="hidden md:flex space-x-8">
                        <li><Link href="#sobre" className="hover:text-blue-600 transition">Sobre</Link></li>
                        <li><Link href="#servicos" className="hover:text-blue-600 transition">Serviços</Link></li>
                        <li><Link href="#contato" className="hover:text-blue-600 transition">Contato</Link></li>
                        <li><Link href="#orcamento" className="border text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                            Quero um orçamento
                        </Link></li>
                    </ul>

                    {/* Botão Mobile (Hambúrguer) */}
                    <div className="md:hidden flex items-center z-10">
                        <button onClick={() => setIsOpen(!isOpen)} className={`hover:text-blue-600 focus:outline-none ${isOpen ? 'text-black' : 'text-white'}`}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu Mobile Aberto */}
            <nav className={`md:hidden absolute top-0 w-full bg-white border-b border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="px-2 pt-20 pb-8 space-y-1 sm:px-3 flex flex-col items-center">
                    <li><Link href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-center">Sobre</Link></li>
                    <li><Link href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-center">Serviços</Link></li>
                    <li><Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-center">Contato</Link></li>
                    <li><Link href="#contato" className="block px-3 py-2 border border-black text-black rounded-full w-full text-center">Quero um orcamento</Link></li>
                </ul>
            </nav>

        </header>
    );
}
