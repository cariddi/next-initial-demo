import React, { FC } from "react";

interface LayoutProps extends React.PropsWithChildren {}

export const DarkLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: "gray",
				borderRadius: "5px",
				padding: "10px",
			}}
		>
			<h3>Dark Layout</h3>
			<div>{children}</div>
		</div>
	);
};
