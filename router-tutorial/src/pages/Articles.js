import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
	return (
		<div>
			<Outlet />
			<ul>
				<ArticleItem id={1} />
				<ArticleItem id={2} />
				<ArticleItem id={3} />
			</ul>
		</div>
	);
};

const ArticleItem = ({ id }) => {
	const activeStyle = ({ isActive }) =>
		isActive
			? {
					color: "green",
					fontSize: 21,
			  }
			: null;

	return (
		<li>
			<NavLink to={`/articles/${id}`} style={activeStyle}>
				게시글 {id}
			</NavLink>
		</li>
	);
};

export default Articles;
