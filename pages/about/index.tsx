import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

export default function AboutPage() {
	return (
		<>
			<h1>About Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/about.js</code>
			</p>
		</>
	);
}

AboutPage.getLayout = (page) => {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
