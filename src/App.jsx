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
    Users,
    Clock,
} from "lucide-react";
import { Church } from "lucide-react";
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        doctor: "",
        date: "",
        time: "",
        reason: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.fullname ||
            !formData.phone ||
            !formData.email ||
            !formData.doctor ||
            !formData.date ||
            !formData.time ||
            !formData.reason
        ) {
            return;
        }
        setIsSubmitted(true);
    };

    const handleBackHome = () => {
        setIsSubmitted(false);
        setFormData({
            fullname: "",
            phone: "",
            email: "",
            doctor: "",
            date: "",
            time: "",
            reason: "",
        });
        window.location.hash = "#home";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                            href="#contact"
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
                        <section id="features" className="py-16 px-4 bg-white">
                            <div className="max-w-6xl mx-auto justify-center ">
                                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                                    Comment ça marche?
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            icon: (
                                                <Church
                                                    className="text-blue-600"
                                                    size={32}
                                                />
                                            ),
                                            title: "Médecins de confiance",
                                            description:
                                                "Remplissez votre formulaire de demande de rendez-vous. Notre équipe médicale dédiée vous contactera rapidement pour confirmer votre rendez-vous et répondre à toutes vos questions.",
                                        },

                                        {
                                            icon: (
                                                <Users
                                                    className="text-blue-600"
                                                    size={32}
                                                />
                                            ),
                                            title: "Support Client",
                                            description:
                                                "Une équipe médicale dédiée pour vous accompagner24/7 Dès que vous prenez rendez-vous .",
                                        },
                                        {
                                            icon: (
                                                <Clock
                                                    className="text-blue-600"
                                                    size={32}
                                                />
                                            ),
                                            title: "Rapide & Efficace",
                                            description:
                                                "Des services rapides et efficaces pour répondre à vos besoins de santé.",
                                        },
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="text-center p-6 rounded-xl hover:shadow-lg transition"
                                        >
                                            <div className="flex justify-center mb-4">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* About Section */}
                        <section id="about" className="py-16 px-4">
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                        <div className="mb-6 md:mb-0">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                                À Propos de Doc-Allo
                                            </h2>
                                            <p className="text-lg opacity-90 max-w-lg">
                                                Doc-Allo est une plateforme
                                                digitale dédiée à la mise en
                                                relation entre patients et
                                                professionnels de santé. Notre
                                                mission est de simplifier
                                                l’accès aux soins grâce à une
                                                interface intuitive et rapide.
                                            </p>
                                        </div>
                                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                                            Notre histoire
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Contact Section */}
                        <section id="contact" className="py-16 px-4 bg-white">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                                    Prise de rendez-vous
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <Phone
                                                className="text-blue-600"
                                                size={24}
                                            />
                                            <span className="text-gray-700">
                                                +229 01 66 76 51 73
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <Mail
                                                className="text-blue-600"
                                                size={24}
                                            />
                                            <span className="text-gray-700">
                                                contact@doc-allo.com
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <MapPin
                                                className="text-blue-600"
                                                size={24}
                                            />
                                            <span className="text-gray-700">
                                                Godomey , Cotonou, Bénin
                                            </span>
                                        </div>
                                    </div>

                                    {!isSubmitted ? (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-sm"
                                        >
                                            <input
                                                type="text"
                                                name="fullname"
                                                value={formData.fullname}
                                                onChange={handleInputChange}
                                                placeholder="Nom complet"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Numéro de téléphone"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Adresse email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <select
                                                name="doctor"
                                                value={formData.doctor}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            >
                                                <option value="">
                                                    Choisissez un médecin
                                                </option>
                                                <option value="Dr. Audace">
                                                    Dr. Audace
                                                </option>
                                                <option value="Dr. Amélioré">
                                                    Dr. Amélioré
                                                </option>
                                                <option value="Dr. Solène">
                                                    Dr. Solène
                                                </option>
                                                <option value="Dr. Serenity">
                                                    Dr. Serenity
                                                </option>
                                            </select>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <input
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <textarea
                                                name="reason"
                                                value={formData.reason}
                                                onChange={handleInputChange}
                                                placeholder="Motif de la consultation"
                                                rows="4"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                                            >
                                                Envoyer ma demande
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-4">
                                            <h3 className="text-2xl font-bold text-emerald-700">
                                                Demande envoyée avec succès
                                            </h3>
                                            <p className="text-gray-700">
                                                Votre demande a été envoyée au{" "}
                                                {formData.doctor ||
                                                    "Dr. choisi"}
                                                .
                                            </p>
                                            <p className="text-gray-600">
                                                Le médecin vous contactera très
                                                prochainement pour confirmer
                                                votre rendez-vous.
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Merci pour votre confiance.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={handleBackHome}
                                                className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                                            >
                                                Retour à l’accueil
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p>© 2026 Doc-Allo — Tous droits réservés</p>
                    <p>Politique de confidentialité</p>
                    <p>Conditions d'utilisation</p>
                    <p className="text-gray-400 mt-2">
                        Designed with ❤️ by the Doc-Allo team
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
