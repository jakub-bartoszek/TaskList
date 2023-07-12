import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tasks from "./features/tasks/Tasks";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<Tasks />
	</React.StrictMode>
);
reportWebVitals();
