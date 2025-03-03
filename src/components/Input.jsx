import React from "react";
import "./input.css";

export default function Input({
	ID,
	name,
	type = "text",
	placeholder = "Type in ...",
}) {
	return (
		<label className="label" For={name}>
			<input
				className="input"
				type={type}
				id={ID}
				name={name}
				required
				placeholder={placeholder}
			/>
		</label>
	);
}
