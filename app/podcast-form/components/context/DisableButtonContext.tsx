import type React from "react";
import { type ReactNode, createContext, useState } from "react";

const DisabledButtonContext = createContext<any>(null);

interface DisabledButtonContextProviderProps {
	children: ReactNode;
}

const DisabledButtonContextProvider: React.FC<
	DisabledButtonContextProviderProps
> = ({ children }) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	return (
		<DisabledButtonContext.Provider value={{ isDisabled, setIsDisabled }}>
			{children}
		</DisabledButtonContext.Provider>
	);
};
export { DisabledButtonContext, DisabledButtonContextProvider };
