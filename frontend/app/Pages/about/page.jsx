import React from "react";

export const metadata = {
    title: "About ChicCloset",
    description: "Learn more about ChicCloset",
};
const About = () => {
    return (
        <div className="container mx-auto my-40">
            <h2 className="text-3xl font-bold mb-4">About ChicCloset</h2>
            <p className="mb-4">
                ChicCloset is your one-stop destination for the latest trends in fashion. We are passionate about
                providing our customers with high-quality, stylish clothing that makes them feel confident and
                comfortable.
            </p>
            <p className="mb-4">
                Our journey began with a vision to redefine fashion, and over the years, we have curated a collection
                that reflects the spirit of modern style. From casual wear to elegant evening dresses, ChicCloset has
                something for every fashion-forward individual.
            </p>
            <p className="mb-4">
                At ChicCloset, we believe in sustainable and ethical fashion. Our commitment to quality and
                responsibility extends to every step of our production process. Join us on our fashion journey and
                discover a world where style meets conscience.
            </p>
            <p className="mb-4">Thank you for choosing ChicCloset – where fashion meets passion!</p>
        </div>
    );
};

export default About;
