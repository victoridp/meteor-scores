import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { addVote, removeVote, selectItemsList } from "../store/itemsList";
import { Item as ItemType } from "../types/common";

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
	const dispatch = useAppDispatch();
	const { voting } = useSelector(selectItemsList);
	let itemClassName = `item item--position-${item.rank}`;
	return (
		<div key={item.id} className={itemClassName}>
			<div className="player">
				<div>
					<h3 className="player__name">{item.name}</h3>
					<p className="player__stats">
						{item.position} place - {item.score} point(s).
					</p>
				</div>

				<div className="player__actions">
					<button
						className="button button--round"
						onClick={() => dispatch(removeVote({ itemId: item.id }))}
					>
						-1
					</button>

					<button
						className="button button--round"
						onClick={() => dispatch(addVote({ itemId: item.id }))}
					>
						+1
					</button>
					{/* <button className="button button--round" onClick={()=>Players.remove(this.props.player._id)}>X</button> */}
				</div>
			</div>
		</div>
	);
};

export default Item;
