import React from "react";

function card({children,className}) {
    return (
        <>
            <div className={`bg-white rounded-xl shadow-xl ${className}`}>
                {children}
            </div>
        </>
    );
}

export default card;
