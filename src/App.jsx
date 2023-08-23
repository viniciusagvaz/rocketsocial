import { Post } from "./Post.jsx";
import './styles.css'

export function App() {
	return (
		<div>
			<h1>Olá, mundo!</h1>
			<Post 
        author="Vinícius Vaz" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil ipsam? Sapiente, vitae saepe voluptatem nesciunt veniam doloremque quas soluta voluptates explicabo enim odit eveniet alias possimus atque perspiciatis ducimus!"
      />
			<Post 
        author="Pedro Galvão" 
        content="Um novo post!"
      />
		</div>
	);
}

