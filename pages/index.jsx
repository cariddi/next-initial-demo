import Link from "next/link";
import { Inter } from "@next/font/google";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
	return (
		<MainLayout>
			<h1>Home Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/about">About</Link>
			</h1>

			<h1 className={"title"}>
				Go to <Link href="/contacts">Contacts</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/index.js</code>
			</p>
		</MainLayout>
	);
}
