import React, { useEffect } from "react";
import Canvas from "./Canvas";
import "../styles/Experience.css";

const Experience = () => {
    const checkBoxes = () => {
        const sections = document.getElementsByClassName("expSection");
        const showHeight = (window.innerHeight * 4) / 5;
        let slideNumber = 0;
        for (const section of sections) {
            const top = section.getBoundingClientRect().top;
            if (top < showHeight) {
                section.classList.add("slideIn");
                slideNumber++;
            }
        }
        if (slideNumber === 4)
            document.removeEventListener("scroll", checkBoxes);
    };

    useEffect(() => {
        document.addEventListener("scroll", checkBoxes);
        return () => {
            document.removeEventListener("scroll", checkBoxes);
        };
    }, []);

    return (
        <div id="experienceContainer" className="centreContainer">
            <Canvas />
            <div className="maxWidthContainer">
                <div className="expFlexContainer">
                    <div className="expSection about">
                        <div className="expTitle">About Me</div>
                        <div className="expDesc">
                            <div>
                                Hi there!
                                <br />
                                My name is Tomi Piisila and I am a web
                                developer.
                            </div>
                            <img
                                className="profilePic"
                                src="profile pic zoom.jpg"
                                alt="Tomi"
                            />
                        </div>
                    </div>
                    <div className="expSection languageExp expEven">
                        <div className="expTitle">Skills</div>
                        <div className="expDesc">
                            <div>
                                Most skilled with:
                                <ul>
                                    <li>Typescript</li>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>.NET</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expSection uniExp">
                        <div className="expTitle">Experience</div>
                        <div className="expDesc">
                            <div>
                                Junior Fullstack Developer at Avolution Software
                                (Dec 2022 - Present)
                                <ul>
                                    <li>
                                        Develop new features and enchancements
                                    </li>
                                    <li>Diagnose and fix bugs</li>
                                    <li>
                                        Write automated tests and conduct manual
                                        testing on own and peer's code
                                    </li>
                                    <li>
                                        Conduct code review on peer's and own
                                        code
                                    </li>
                                    <li>
                                        Collaborate with other employees of the
                                        company and assisting to any their
                                        issues
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expSection interests expEven">
                        <div className="expTitle">Studies</div>
                        <div className="expDesc">
                            Graduated from UTS with a Bachelor of Science in
                            Information Technology
                            <br />
                            <br />
                            Major in Enterprise Systems Development
                            <br />
                            <br />
                            WAM: 89.25 (GPA: 6.75)
                            <br />
                            <br />
                            Two Dean's List awards (2022 & 2023)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
