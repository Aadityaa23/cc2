import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import DAC from "./pages/DAC";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/DAC" element={<DAC />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
