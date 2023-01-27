import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
	return (
		<>
			<h1>Home Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/about">About</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/index.js</code>
			</p>
		</>
	);
}

HomePage.getLayout = (page) => {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
