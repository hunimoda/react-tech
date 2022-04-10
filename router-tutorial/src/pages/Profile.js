import { useParams } from "react-router-dom";

const data = {
	velopert: {
		name: "김민준",
		description: "리액트를 좋아하는 개발자",
	},
	hunimoda: {
		name: "김대훈",
		description: "개발을 좋아하는 프로그래머",
	},
};

const Profile = () => {
	const params = useParams();
	const profile = data[params.username];

	return (
		<div>
			<h1>사용자 프로필</h1>
			{profile ? (
				<div>
					<h2>{profile.name}</h2>
					<p>{profile.description}</p>
				</div>
			) : (
				<p>존재하지 않는 프로필입니다.</p>
			)}
		</div>
	);
};

export default Profile;