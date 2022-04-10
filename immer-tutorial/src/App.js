import { useRef, useCallback, useState, useEffect } from "react";
import produce from "immer";

const App = () => {
	const nextId = useRef(1);
	const idInputEl = useRef(null);

	const [form, setForm] = useState({ name: "", username: "" });
	const [data, setData] = useState({ array: [], uselessValue: null });

	useEffect(() => {
		idInputEl.current.focus();
	}, []);
	// input 수정을 위한 함수
	const onChange = useCallback((e) => {
		const { name, value } = e.target;
		setForm(
			produce((draft) => {
				draft[name] = value;
			})
		);
	}, []);

	// form 등록을 위한 함수
	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const info = {
				id: nextId.current,
				name: form.name,
				username: form.username,
			};

			setData(
				produce((draft) => {
					draft.array.push(info);
				})
			);

			setForm({ name: "", username: "" });
			nextId.current++;
			idInputEl.current.focus();
		},
		[nextId, form.name, form.username]
	);

	const onRemove = useCallback((id) => {
		setData(
			produce((draft) => {
				const array = draft.array;
				array.splice(
					array.findIndex((info) => info.id === id),
					1
				);
			})
		);
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="username"
					placeholder="아이디"
					value={form.username}
					onChange={onChange}
					ref={idInputEl}
				/>
				<input
					name="name"
					placeholder="이름"
					value={form.name}
					onChange={onChange}
				/>
				<button type="submit">등록</button>
			</form>
			<div>
				<ul>
					{data.array.map((info) => (
						<li key={info.id} onClick={() => onRemove(info.id)}>
							{info.username} ({info.name})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
