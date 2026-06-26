import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/storeContext.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Failed to find root element");
}
createRoot(rootElement).render(
	<BrowserRouter>
		<StrictMode>
			<StoreContextProvider>
				<App />
			</StoreContextProvider>
		</StrictMode>
	</BrowserRouter>,
);
