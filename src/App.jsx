import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";

import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
	{
		id: 1,
		author: {
			AvatarUrl: "https://github.com/ingridsj.png",
			name: "Ingrid Almeida",
			role: "Full Stack Developer @ Gasola",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Fiz um novo projeto na maratona Discover pela Rocketseat. É um aplicativo de gestão financeira, o Dev.Finances!! 🚀",
			},
			{ type: "link", content: "👉{' '}, veja o projeto aqui! :D" },
		],
		publishAt: new Date("2023-08-23 11:43:34"),
	},
	{
		id: 2,
		author: {
			AvatarUrl:
				"https://www.linkedin.com/in/marcoswunder138?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADtIh2kBDRMZk7BVBLZSJ7lB_hF9WB930lQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BVsX6SE5PRGaOsg%2BSbrPLtg%3D%3D",
			name: "Marcos Wunder",
			role: "Técnico e Editor de Som",
		},
		content: [
			{ type: "paragraph", content: "Eai, pessoal!" },
			{
				type: "paragraph",
				content: "Essa semana eu terminei minha logo marca!",
			},
			{ type: "link", content: "Dá uma conferida aqui!" },
		],
		publishAt: new Date("2023-08-23 13:15:06"),
	},
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map(post => {
						return (
                     // eslint-disable-next-line react/jsx-key
                     <Post 
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishAt}
                     />
                     );
					})}
				</main>
			</div>
		</div>
	);
}
