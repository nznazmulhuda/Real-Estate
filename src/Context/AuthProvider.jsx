import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
	const authInfo = {
		name: "nahid",
	};

	return (
		<>
			<AuthContext.Provider value={authInfo}>
				{children}
			</AuthContext.Provider>
		</>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
