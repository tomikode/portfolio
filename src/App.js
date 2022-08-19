import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TransitionLogo from "./components/TransitionLogo";
import { useEffect, useState } from "react";

function App() {
	const location = useLocation();
	const [page, setPage] = useState(location.pathname)

	useEffect(() => {
		switch (location.pathname) {
			case "/contact":
				setTimeout(() => setPage('/contact'), 300)
				break;
			default: 
				setTimeout(() => setPage('/'), 300)
				break;
		}
	}, [location.pathname])

	const getPage = () => {
		switch (page) {
			case '/contact':
				return <Contact location={location} />
			default:
				return <Home location={location} />
		}
	}

	return (
		<div className="app">
			<TransitionLogo location={location} />
			<Navbar location={location} />
			{getPage()}
		</div>
	);
}

export default App;
