import React from 'react';
import Match from './Match';

function MatchList(props) {
  const matches = props.matchData.map((match) => {
    return <Match {...match} key={match.matchNumber}/>
  });

  return (
    <section className='PlayerList MatchList'>
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;