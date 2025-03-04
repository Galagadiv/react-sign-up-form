import React, {useState} from "react";
import "./input.css";

export default function Input({
	ID,
	name,
	type = "text",
	placeholder = "Type in ...",
	value,
	setValue,
}) {
	// const [value, setValue] = useState("");
	console.log(`Rendered ${name}`);

	return (
		<label className="label" htmlFor={name}>
			<input
				className="input"
				type={type}
				value={value}
				onChange={(event) => setValue(event.target.value)}
				id={ID}
				name={name}
				required
				placeholder={placeholder}
			/>
		</label>
	);
}
