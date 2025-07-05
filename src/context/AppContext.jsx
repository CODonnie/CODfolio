import {createContext, useState} from "react";
import { project } from "../assets/assets";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const [showProject, setShowProject] = useState(null);

	const value = {
		showProject,
		setShowProject,
		project,
	};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};
