import Head from 'next/head'
import numeral from 'numeral';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scores App</title>
        <meta name="description" content="Scores App by Victor Iris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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