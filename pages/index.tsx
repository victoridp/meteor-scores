import { useQuery } from "@apollo/client";
import Head from "next/head";
import numeral from "numeral";
import React, { useState } from "react";
import AddPlayer from "../components/AddItem";
import ItemList from "../components/ItemList";
import TitleBar from "../components/TitleBar";
import { ITEMS } from "../graphql/queries";
import { Item } from "../types/common";
import { items, items_items } from "../types/graphql/items";

export default function Home() {
	const [items, setItems] = useState<items_items[]>([])
	const {loading} = useQuery<items>(ITEMS, {
		onCompleted: (data) => {
			data.items && setItems(data.items)
		}
	})

	return (
		<div>
			<Head>
				<title>Scores App</title>
				<meta name="description" content="Scores App by Victor Iris" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TitleBar title="scores" subtitle="By Victor Iris" />
			<div className="wrapper">
				<ItemList items={calculateItemsPositions(items)} />
				<AddPlayer />
			</div>
		</div>
	);
}

export const calculateItemsPositions = (items: items_items[]): Item[] => {
  let rank = 1;

  return items.map((item, index) => {

      if (index !== 0 && items[index-1].score > item.score) {
          rank++
      }

      return {
          ...item,
          rank,
          position: numeral(rank).format('0o')
      };
  });

};

