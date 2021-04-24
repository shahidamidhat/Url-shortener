import React from "react";

function Display(){
    return(
        <>
            <div className="container">
                <h1>Quick URL Shortener</h1>
                <label for="longurl">Your Long URL</label>
                <input id="longurl" placeholder="Paste your URL"/>
                <button className="getshort">Get Short Link</button>
            </div>
        </>
    );
}

export default Display;