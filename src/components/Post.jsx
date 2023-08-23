import styles from "./Post.module.css";

export function Post(props) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/ingridsj.png"
					/>
					<div className={styles.authorInfo}>
						<strong>Ingrid Almeida</strong>
						<span>Full Stack Developer</span>
					</div>
				</div>

				<time title="23 de Agosto às 16:45h" dateTime="2023-08-23 16:45:31">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					É um jogo da memória desenvolvido com propósito de aprimorar os
					conhecimentos em React Native, Expo, e animações com Lottie. 🚀
				</p>
				<p>
					👉
					<a href="https://github.com/ingridsj/disney-memory-game">
						veja o projeto aqui! :D
					</a>
				</p>
				<p>
					<a href="#">#novoprojeto</a>
					<a href="#"> #memorygame </a>
					<a href="#"> #disney</a>
				</p>
			</div>
		</article>
		// <div>
		// <strong>{props.author}:</strong>
		// <p>{props.content}</p>
		// </div>
	);
}

// Default Exports vs Named Exports
