import { useSearchParams } from "react-router-dom";

const About = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const detail = searchParams.get("detail");
	const mode = searchParams.get("mode");

	const onToggleDetail = () => {
		const newDetail = detail === "true" ? false : true;
		setSearchParams({ mode, detail: newDetail });
	};
	const onIncreaseMode = () => {
		const newMode = Number(mode ?? 0) + 1;
		setSearchParams({ mode: newMode, detail });
	};

	return (
		<div>
			<h1>소개</h1>
			<p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
			<p>detail: {detail}</p>
			<p>mode: {mode}</p>
			<button onClick={onToggleDetail}>Toggle detail</button>
			<button onClick={onIncreaseMode}>mode + 1</button>
		</div>
	);
};

export default About;
