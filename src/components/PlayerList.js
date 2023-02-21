import React from 'react';
import Player from './Player';

function PlayerList(props) {
  const players = props.playerData.map((player) => {
    return <Player {...player} key={player.gamerTag} />
  });
  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default  PlayerList;