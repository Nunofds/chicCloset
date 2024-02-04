import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Colonne 1 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Information</h3>
                    <ul>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="/terms">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Colonne 2 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                    <ul>
                        <li>
                            <a href="/faq">FAQs</a>
                        </li>
                        <li>
                            <a href="/shipping">Shipping Information</a>
                        </li>
                        <li>
                            <a href="/returns">Returns & Exchanges</a>
                        </li>
                    </ul>
                </div>

                {/* Colonne 3 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Shop</h3>
                    <ul>
                        <li>
                            <a href="/products">All Products</a>
                        </li>
                        <li>
                            <a href="/new-arrivals">New Arrivals</a>
                        </li>
                        <li>
                            <a href="/sale">Sale</a>
                        </li>
                    </ul>
                </div>

                {/* Colonne 4 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                    <ul>
                        <li>
                            <a href="/newsletter">Subscribe to Newsletter</a>
                        </li>
                        <li>
                            <a href="/social-media">Social Media</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Barre de séparation */}
            <hr className="my-8 border-gray-600" />

            {/* Mentions légales */}
            <p className="text-center">&copy; 2024 ChicCloset. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
