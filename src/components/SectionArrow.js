import "../styles/SectionArrow.css";

const SectionArrow = () => {
    return (
        <div className="triangleBackground">
            <svg
                viewBox="0 0 509 254"
                xmlns="http://www.w3.org/2000/svg"
                id="triangle"
                preserveAspectRatio="none"
                className="triangle"
            >
                <rect
                    x="254.558"
                    y="-255"
                    width="360"
                    height="360"
                    transform="rotate(45 255 -255)"
                />
            </svg>
        </div>
    );
};

export default SectionArrow;
