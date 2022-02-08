import React from "react";
import "./MyButton.css";

const MyButton = ({ children }) => {
    return (
        <div className="myButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </div>
    );
};

export default MyButton;
