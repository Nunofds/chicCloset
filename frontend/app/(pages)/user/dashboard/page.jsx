import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

/**
 * Generate the dashboard page for user account. The user can manage your profile, cart's and commands if he is connected
 * @returns Promise<React.JSX.Element>
 */
export default async function Dashboard() {
    const session = await getServerSession();

    // if session does not exist we redirect the user for home url (/)
    if (!session) {
        redirect("/");
    }

    return <div>Dashboard</div>;
}
