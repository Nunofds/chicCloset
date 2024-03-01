"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchProductList from "./SearchProductList";
import { User, ShoppingCart, Heart } from "react-feather";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NavBar() {
    const router = useRouter();
    const { data: session } = useSession();
    const [results, setResults] = useState([]);

    return (
        <div>
            <div className="flex justify-between items-center p-4 w-full bg-royal-blue text-black">
                <div>
                    <h3 className="mr-4">
                        Free Retrun Worldwide within 20 days
                    </h3>
                </div>
                <div className="flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href={"/about"}>About</Link>

                    {!session ? (
                        <>
                            <Link href="/login">Log In</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/user/dashboard">Dashboard</Link>
                            <Link href="/user/cart/wishlist">WishList</Link>
                            <div>
                                <span className="mx-3 italic">
                                    {session.user.email}
                                </span>
                                <button
                                    onClick={() => {
                                        signOut();
                                        router.replace("/");
                                        console.log("--------");
                                        console.log("user deconnected");
                                        console.log("--------");
                                    }}
                                >
                                    logOut
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="">
                <div className=" flex justify-around items-center p-4 w-full bg-white text-black">
                    <div className="logo">
                        <p>ChiCloset</p>
                    </div>
                    <div className="searchBar-navbar">
                        {/* <SearchBar /> */}
                        <SearchBar setResults={setResults} />
                        {results && results.length > 0 && (
                            <SearchProductList results={results} />
                        )}
                    </div>

                    <div className="flex space-x-4">
                        <Link href="/account/dashboard">
                            <User />
                        </Link>
                        <Link href="/cart/wishlist">
                            <Heart />
                        </Link>
                        <Link href="/cart">
                            <ShoppingCart />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="dropdown">
                    <label htmlFor="brandDropdown">Brand:</label>
                    <select
                        id="brandDropdown"
                        // value={selectedBrand}
                        // onChange={(e) => handleBrandChange(e.target.value)}
                    >
                        <option value="All Brands">Brands</option>
                        <option value="Brand1">Brand1</option>
                        <option value="Brand2">Brand2</option>
                        {/* Ajoutez d'autres options de marque selon vos besoins */}
                    </select>
                </div>
                <div className="dropdown">
                    <label htmlFor="saleDropdown">Sale:</label>
                    <select
                        id="saleDropdown"
                        // value={selectedSale}
                        // onChange={(e) => handleSaleChange(e.target.value)}
                    >
                        <option value="All Sales">All Sales</option>
                        <option value="Sale1">Sale1</option>
                        <option value="Sale2">Sale2</option>
                        {/* Ajoutez d'autres options de vente selon vos besoins */}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
