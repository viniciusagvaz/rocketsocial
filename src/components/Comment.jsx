import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://media.licdn.com/dms/image/D4D03AQGCdfT1sEBxGA/profile-displayphoto-shrink_400_400/0/1687813480909?e=1698278400&v=beta&t=nisZwlVzwxAoXbV9k73QdvDGVd08Y-uKhBJ9GdH0HcA" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Vinícius Vaz</strong>
							<time
								title="23 de Agosto às 16:45h"
								dateTime="2023-08-23 17:56:49">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>Muito bem, Ingrid! Parabéns!</p>
				</div>

				<footer>
					<button title="Aplaudir">
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
