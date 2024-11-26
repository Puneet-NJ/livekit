import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./pages/room";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/:token" element={<Room />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
