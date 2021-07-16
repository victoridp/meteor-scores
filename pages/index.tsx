import { Item } from "@prisma/client";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import numeral from "numeral";
import React from "react";
import Head from 'next/head'
import numeral from 'numeral';
import TitleBar from "../components/TitleBar";
import PlayerList from "../components/ItemList";
import AddPlayer from "../components/AddItem";

export default function Home({ items }: AppProps) {
	console.log({ items });
	return (
		<div>
			<Head>
				<title>Scores App</title>
				<meta name="description" content="Scores App by Victor Iris" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TitleBar title="scores" subtitle="By Victor Iris" />
			<div className="wrapper">
				<PlayerList players={items} />
				<AddPlayer />
			</div>
		</div>

  )
}

// export const calculatePlayerPositions = (players) => {
//   let rank = 1;

//   return players.map((player, index) => {
      
//       if (index !== 0 && players[index-1].score > player.score) {
//           rank++
//       }

//       return {
//           ...player,
//           rank,
//           position: numeral(rank).format('0o')
//       };
//   });

// };