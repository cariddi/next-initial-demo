import Link from "next/link";
import { Inter } from "@next/font/google";
import { MainLayout } from "../../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
	return (
		<MainLayout>
			<h1>About Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/">Home</Link>
			</h1>

			<h1 className={"title"}>
				Go to <Link href="/contacts">Contacts</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/about.js</code>
			</p>
		</MainLayout>
	);
}
