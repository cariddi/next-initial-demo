import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
	color: "#0070f3",
	textDecoration: "underline",
};

interface ActiveLinkProps {
	href: string;
	text: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ href, text }) => {
	const router = useRouter();
	const { asPath } = router;

	return (
		<Link href={href} legacyBehavior>
			<a style={asPath === href ? style : undefined}>{text}</a>
		</Link>
	);
};
