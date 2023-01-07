import Link from "next/link";
import { useRouter } from "next/router";

const style = {
	color: "#0070f3",
	textDecoration: "underline",
};

export const ActiveLink = ({ href, text }) => {
	const router = useRouter();
	const { asPath } = router;

	return (
		<Link href={href} legacyBehavior>
			<a style={asPath === href ? style : null}>{text}</a>
		</Link>
	);
};
