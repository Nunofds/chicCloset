import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Notre Entrepgitrise
                        </h2>
                        <p>Informations sur votre entreprise.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Liens Rapides
                        </h2>
                        <ul>
                            <li>
                                <a href="/">Accueil</a>
                            </li>
                            <li>
                                <a href="/produits">Produits</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Contactez-nous
                        </h2>
                        <p>Adresse, numéro de téléphone, email, etc.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800">
                <p>&copy; 2024 ChicCloset. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
