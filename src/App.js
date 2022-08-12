import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {

	return (
		<Router>
			<div className="app">
				<Navbar />
				<Home />
				<Contact />
			</div>
		</Router>
	);
}

export default App;
