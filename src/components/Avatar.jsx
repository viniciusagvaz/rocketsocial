import styles from "./Avatar.module.css";

// eslint-disable-next-line react/prop-types
export function Avatar({hasBorder = true, src}) {
  const defineBoarder = hasBorder ? styles.avatarWithBorder : styles.avatar
	
  return (
		// eslint-disable-next-line react/prop-types
		<img
			className={defineBoarder}
			src={src}
		/>
	);
}
