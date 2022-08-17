import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {

	const location = useLocation();


	return (
		<div className="app">
			<Navbar location={location} />
			<Home location={location} />
			<Contact location={location} />
		</div>
	);
}

export default App;
