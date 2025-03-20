import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Collection from "@/pages/Collection";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Orders from "@/pages/Orders";
import PlaceOrder from "@/pages/PlaceOrder";
import Product from "@/pages/Product";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/about", element: <About /> },
		{ path: "/login", element: <Login /> },
		{ path: "/contact", element: <Contact /> },
		{ path: "/collection", element: <Collection /> },
		{ path: "/orders", element: <Orders /> },
		{ path: "/product/:productId", element: <Product /> },
		{ path: "/cart", element: <Cart /> },
		{ path: "/placeOrder", element: <PlaceOrder /> },
	];

	const elements = useRoutes(routes);

	return elements;
};

export default ProjectRoutes;
