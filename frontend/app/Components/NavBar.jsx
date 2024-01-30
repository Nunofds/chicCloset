import React from "react";
import Link from "next/link";

function NavBar() {
    return (
        <div>
            <div className="flex justify-between items-center p-4 w-full bg-black text-white">
                <div>
                    <h3 className="mr-4">Free Retrun Worldwide within 20 days</h3>
                </div>
                <div className="flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href={"/Pages/about"}>About</Link>
                    <Link href="/myaccount">My Account</Link>
                    <Link href="/wishlist">WishList</Link>
                    <Link href="/login">Log In</Link>
                </div>
            </div>
            <div>
                <div className="logo">{/* logo */}</div>
                <div className="searchBar-navbar">{/* search bar */}</div>
                <div>{/* icone login, wishlist, cart */}</div>
            </div>
        </div>
    );
}

export default NavBar;
