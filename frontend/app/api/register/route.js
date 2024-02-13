import { mongodbConnect } from "../../utils/mongodb";

export async function POST(req) {
    try {
        await mongodbConnect();
        const { username, email, password } = await req.json();
        console.log({ username, email, password });
        return;
    } catch (error) {
        console.log("Error while registering user.", error);
    }
}
