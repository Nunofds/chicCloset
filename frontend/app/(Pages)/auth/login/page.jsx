import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div>
            <div>
                <Link href={"/account/dashboard"}>dashboard</Link>
            </div>

            <div>
                <Link href={"/cart/wishlist"}>wishlist</Link>
            </div>

            <div>
                <Link href={"/cart"}>Cart</Link>
            </div>
        </div>
    );
}
