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
                                        Implemented dynamic updating of a tree
                                        folder structure, showing other user’s
                                        changes in real time without needing to
                                        refresh
                                    </li>
                                    <br />
                                    <li>
                                        Created a highly configurable React API
                                        for a movable and resizable dialog to
                                        significantly boost developer
                                        productivity
                                    </li>
                                    <br />
                                    <li>
                                        Code reviewed a complete frontend
                                        rewrite of a highly customisable tabling
                                        feature (over 150 hours worth of
                                        development work)
                                    </li>
                                    <br />
                                    <li>
                                        Successfully debugged and solved a rare
                                        race condition that was blocking users
                                        from editing their project for 30
                                        minutes
                                    </li>
                                    <br />
                                    <li>
                                        Implemented a highly requested (by at
                                        least 5 clients) custom content portlet,
                                        which allowed users to write text, HTML,
                                        Markdown and upload images
                                    </li>
                                    <li>
                                        Played a major role in boosting our web
                                        app’s WCAG compliancy to A/AA levels
                                    </li>
                                    <li>
                                        Reduced computation time by 92% at best
                                        on users sorting their tabular data by
                                        implementing a backend caching solution
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
