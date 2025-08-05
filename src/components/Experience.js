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
                                My name is Tomi Piisila and I am a
                                Finnish/Australian web developer.
                            </div>
                            <img
                                className="profilePic"
                                src="headshot.jpg"
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
                                    <li>Accessibility practices</li>
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
                                        Plan, discuss and implement solutions to
                                        defects, enhancements or new features to
                                        an enterprise website application
                                    </li>
                                    <br />
                                    <li>
                                        Review peer’s code to spot potential
                                        bugs and provide suggestions to enhance
                                        code quality and stay adhering to best
                                        practices
                                    </li>
                                    <br />
                                    <li>
                                        Write automated tests and conduct manual
                                        testing on own and peer's code
                                    </li>
                                    <br />
                                    <li>
                                        Investigate potential bugs found by
                                        consultants and answer questions they
                                        may have
                                    </li>
                                    <br />
                                    <li>
                                        Collaborating with managers, UX/UI
                                        designers and other developers on a
                                        large scale web application
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
