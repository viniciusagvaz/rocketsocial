import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
	const defineBoarder = hasBorder ? styles.avatarWithBorder : styles.avatar;

	return <img className={defineBoarder} src={src} />;
}
