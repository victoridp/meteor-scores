import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ITEM } from "../graphql/mutations";
import { createItem, createItemVariables } from "../types/graphql/createItem";

export default function AddPlayer() {
	const [create, { loading }] = useMutation<createItem, createItemVariables>(
		CREATE_ITEM,
		{
			onError: (err) => alert(err.message),
		}
	);
	function handleSubmit(e: any) {
		let itemName = e.target.itemName.value;
		e.preventDefault();

		if (itemName) {
			create({
				variables: {
					input: {
						name: itemName,
						score: 0,
					},
				},
			});
			e.target.itemName.value = "";
		}
	}
	return (
		<div className="item">
			<form className="form" onSubmit={handleSubmit}>
				<input
					className="form__input"
					type="text"
					name="itemName"
					placeholder="Item name"
				/>
				<button className="button" disabled={loading}>
					Add Item
				</button>
			</form>
		</div>
	);
}
