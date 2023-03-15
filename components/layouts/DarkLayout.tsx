import React, { FC } from "react";

export const DarkLayout: FC = ({ children }: React.PropsWithChildren) => {
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
