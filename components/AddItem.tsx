import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { addNewItem, selectItemsList } from "../store/itemsList";

export default function AddItem() {
	const dispatch = useAppDispatch();
	const { creating } = useSelector(selectItemsList);
	function handleSubmit(e: any) {
		let itemName = e.target.itemName.value;
		e.preventDefault();

		if (itemName) {
			dispatch(
				addNewItem({
					name: itemName,
					score: 0,
				})
			);
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
				<button className="button" disabled={creating}>
					Add Item
				</button>
			</form>
		</div>
	);
}
