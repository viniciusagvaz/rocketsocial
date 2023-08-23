import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
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
				<p>Fala galeraa 👋</p>
				<p>
					Fiz um novo projeto na maratona Discover pela Rocketseat. É um aplicativo de gestão financeira, o Dev.Finances!! 🚀
				</p>
				<p>
					👉{" "}
					<a href="https://github.com/viniciusagvaz/discover-devfinances">
						veja o projeto aqui! :D
					</a>
				</p>
				<p>
					<a href="#">#novoprojeto</a> <a href="#"> #devfinances </a>{" "}
					<a href="#"> #rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário"></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
		</article>
	);
}

// Default Exports vs Named Exports
