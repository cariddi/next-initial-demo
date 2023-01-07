import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About - Lucas</title>
				<meta name="description" content="About Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={styles.main}>
				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
					<div className={styles.thirteen}>
						<Image
							src="/thirteen.svg"
							alt="13"
							width={40}
							height={31}
							priority
						/>
					</div>
				</div>

				<h1 className={styles.title}>
					{/* this makes a prefetch of the linked page/module (unlike regular anchor element) */}
					{/* so that it won't reload the page when navigating between pages (only apply to local routes) */}
					Go to back to <Link href="/">Home</Link>
				</h1>
			</main>
		</>
	);
}
