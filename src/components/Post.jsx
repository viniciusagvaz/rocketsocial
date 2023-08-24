import { Avatar  } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder= {true}
						src="https://media.licdn.com/dms/image/D4D03AQGCdfT1sEBxGA/profile-displayphoto-shrink_400_400/0/1687813480909?e=1698278400&v=beta&t=nisZwlVzwxAoXbV9k73QdvDGVd08Y-uKhBJ9GdH0HcA"
					/>
					<div className={styles.authorInfo}>
						<strong>Vinícius Vaz</strong>
						<span>Front-End Developer</span>
					</div>
				</div>

				<time title="23 de Agosto às 16:45h" dateTime="2023-08-23 16:45:31">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>

			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário"></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}

// Default Exports vs Named Exports
