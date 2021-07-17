import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddItem from "../components/AddItem";
import ItemList from "../components/ItemList";
import TitleBar from "../components/TitleBar";
import { useAppDispatch } from "../store";
import { getItems, selectItems } from "../store/itemsList";

export default function Home() {
	const dispatch = useAppDispatch()
	const items = useSelector(selectItems);

	useEffect(() => {
		dispatch(getItems())
	}, [])

	return (
		<div>
			<Head>
				<title>Scores App</title>
				<meta name="description" content="Scores App by Victor Iris" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TitleBar title="scores" subtitle="By Victor Iris" />
			<div className="wrapper">
				<ItemList items={items} />
				<AddItem />
			</div>
		</div>
	);
}
