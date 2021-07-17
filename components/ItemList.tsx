import React from "react";
import FlipMove from "react-flip-move";
import { Item } from "../types/common";
import Player from "./Item";

export default function ItemList(props: { items: Item[] }) {
	function renderRows() {
		if (props.items.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first item to get started!</p>
				</div>
			);
		} else {
			return props.items.map((item) => {
				return <Player key={item?.id} item={item} />;
			});
		}
	}
	return (
		<div>
			<FlipMove maintainContainerHeight={true}>{renderRows()}</FlipMove>
		</div>
	);
}
