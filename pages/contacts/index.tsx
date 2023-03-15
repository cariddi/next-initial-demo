import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactsPage() {
	return (
		<>
			<h1>Contacts Page</h1>

			<h1 className={"title"}>
				Go to <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Getting started by editing{" "}
				<code className={"code"}>pages/contacts.js</code>
			</p>
		</>
	);
}

ContactsPage.getLayout = (page) => {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
