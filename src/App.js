import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  

	return (
		<Router>
			<div className="app">
				<Navbar />
				<Routes>
					<Route
						path="/contact"
						element={<><div className="other hide" /><div className="space" /></>}
					/>
					<Route
						path="/"
						element={<><div className="other" /><div className="space hide" /></>}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
