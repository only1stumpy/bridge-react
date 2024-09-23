import React from "react";

export default function NotFound(){
    return(
        <div className="flex flex-col w-screen h-screen text-[100px] text-white justify-center items-center font-roboto">
            404 Not Found
            <a href="/" className="text-yellow-300">Go Home</a>
        </div>
    )
}