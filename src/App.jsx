import { Header } from "./components/Header.jsx";
import { Post } from "./Post.jsx";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					<Post
						author="Vinícius Vaz"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil ipsam?"
					/>
					<Post author="Pedro Galvão" content="Um novo post muito legal!" />
				</main>
			</div>
		</div>
	);
}
