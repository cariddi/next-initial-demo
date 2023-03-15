import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
	{
		text: "Contacts",
		href: "/contacts",
	},
	{
		text: "Pricing",
		href: "/pricing",
	},
];

export const Navbar = () => {
	return (
		<nav className={styles.menu}>
			{menuItems.map(({ text, href }) => (
				<ActiveLink text={text} href={href} key={text} />
			))}
		</nav>
	);
};
