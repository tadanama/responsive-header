import { useState } from "react";
import "./index.css";

function App() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<header>
				<div className="container header-flex">
					<div className="header__logo">
						<h1>Syakir</h1>
					</div>
					<div className={`header__links ${showMenu ? "active" : "hide"}`}>
						<a href="">Home</a>
						<a href="">About</a>
						<a href="">Projects</a>
						<a href="">Contact</a>
					</div>
					<a
						className="burger-menu"
						href=""
						onClick={(e) => {
							e.preventDefault();

							setShowMenu((prev) => !prev);
						}}
					>
						Burger
					</a>
				</div>
			</header>
		</>
	);
}

export default App;
