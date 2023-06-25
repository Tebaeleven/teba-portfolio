import React from "react";

export default function BodyCard({ children }) {
    return (
        <div className="bg-blue-100">
            <div className="mx-auto max-w-screen-lg	py-4 px-4 md:px-8 ">
                <div className="bg-white py-5 px-10 rounded-xl shadow-2xl mb-40">
                    {children}
                </div>
            </div>
        </div>
    );
}
