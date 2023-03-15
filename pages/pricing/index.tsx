import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
	return (
		<>
			<h1>Pricing Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/pricing.js</code>
			</p>
		</>
	);
}

PricingPage.getLayout = (page) => {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
