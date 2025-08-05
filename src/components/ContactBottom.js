import React, { useEffect } from "react";
import "../styles/ContactBottom.css";
import BottomCanvas from "./BottomCanvas";
import IconRow from "./IconRow";

const ContactBottom = () => {
    const checkShows = () => {
        const underline = document.getElementById("underline");
        const icons = document.getElementsByClassName("rowIcon");
        const showHeight = (window.innerHeight * 4) / 5;
        if (underline.getBoundingClientRect().top < showHeight) {
            underline.classList.add("underlineGrow");
            for (let i = 0; i < icons.length; i++) {
                if (i === 0) icons[i].classList.add("showRowIcon");
                else
                    setTimeout(() => {
                        icons[i].classList.add("showRowIcon");
                    }, 500 * i);
            }
            document.removeEventListener("scroll", checkShows);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", checkShows);

        return () => {
            document.removeEventListener("scroll", checkShows);
        };
    });

    return (
        <div id="contactBottomContainer">
            <div id="contactBottomForm">
                <div className="canvasSide">
                    <BottomCanvas />
                </div>
                <div className="descSide">
                    <div className="formTitle">
                        <h1>Socials</h1>
                        <div id="underline" className="underline" />
                    </div>
                    <div>
                        <p>
                            Feel free to contact me for any inquiries. I will
                            try to respond as quick as I can!
                        </p>
                    </div>
                    <IconRow show={false} />
                </div>
            </div>
        </div>
    );
};

export default ContactBottom;
