// App.js
import React, { useState } from "react";
import TextType from "./TextType";
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Star,
    Users,
    Clock,
} from "lucide-react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
                <div className="px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                H
                            </span>
                        </div>
                        <span className="font-bold text-xl text-gray-800">
                            Doc-Allo
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#home"
                            className="text-gray-600 hover:text-blue-600 transition"
                        >
                            Accueil
                        </a>
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-blue-600 transition"
                        >
                            Prendre-rendez-vous
                        </a>
                        <a
                            href="#about"
                            className="text-gray-600 hover:text-blue-600 transition"
                        >
                            À propos
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-blue-600 transition"
                        >
                            Contact
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="flex flex-col space-y-3 px-4 py-3">
                            <a
                                href="#home"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-black px-8 py-3 rounded-sm w-fit transition hover:opacity-90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </a>
                            <a
                                href="#features"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-black px-8 py-3 rounded-sm w-fit transition hover:opacity-90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Prendre-rendez-vous
                            </a>
                            <a
                                href="#about"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-black px-8 py-3 rounded-sm w-fit transition hover:opacity-90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </a>
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-black px-8 py-3 rounded-sm w-fit transition hover:opacity-90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <section id="home" className="pt-20 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Votre santé,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                notre priorité
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Bienvenue sur{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Doc-Allo
                            </span>
                            , la plateforme de prise de rendez-vous en ligne
                            pour les professionnels de santé.
                        </p>
                        <div className="flex justify-center mb-8">
                            <img
                                src="public/images/profil.jpg"
                                alt="Médecin "
                                className="w-full max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                            />
                        </div>
                        <p className="text-lg text-gray-600 mb-8">
                            Prenez rendez-vous avec un professionnel de santé en
                            quelques clics, Simple, rapide et sécurisé.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            <TextType
                                text={[
                                    "Bienvenue sur Doc-Allo!",
                                    "Votre santé, notre priorité!",
                                    "Prenez rendez-vous en ligne!",
                                ]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="_"
                                texts={[
                                    "Bienvenue sur Doc-Allo!",
                                    "Votre santé, notre priorité!",
                                    "Prenez rendez-vous en ligne!",
                                ]}
                                deletingSpeed={50}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.5}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
