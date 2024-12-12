// src/components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título de la tienda */}
                <h1 className="text-3xl font-bold text-orange-400 drop-shadow-md">
                    Tienda Deportiva
                </h1>

                {/* Navegación */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                href="/"
                                className="text-white text-lg hover:underline transition duration-300"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/productos"
                                className="text-white text-lg hover:underline transition duration-300"
                            >
                                Productos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
