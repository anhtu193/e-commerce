import NavBar from "@/components/NavBar";
import ProjectRoutes from "@/Routes";

function App() {
	return (
		<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
			<NavBar />
			<ProjectRoutes />
		</div>
	);
}

export default App;
