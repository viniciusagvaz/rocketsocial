import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";

import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/viniciusagvaz.png",
			name: "Vinicius Vaz",
			role: "Front End Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Fiz um novo projeto na maratona Discover pela Rocketseat. É um aplicativo de gestão financeira, o Dev.Finances!! 🚀",
			},
			{ type: "link", content: "👉 veja o projeto aqui! :D" },
		],
		publishedAt: new Date("2023-08-24 13:43:34"),
	},
	{
		id: 2,
		author: {
			avatarUrl:
				"https://media.licdn.com/dms/image/D4E35AQH96yg0hlYG-g/profile-framedphoto-shrink_400_400/0/1651235394486?e=1693501200&v=beta&t=L60cjv28FvAIQolOA3t4gAGkH-JZ2xvZj9NjWDKaWGQ",
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
		publishedAt: new Date("2023-08-24 13:05:06"),
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
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
