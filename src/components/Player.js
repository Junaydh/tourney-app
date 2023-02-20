import React from 'react';

function Player() {
  return (
    <article className='Player'>
      <h1>John<span>Secret</span>Doe</h1>
      {}
      <h2 className='zero'>Currently with no wins :(</h2>
      {}
      <h2>Currently with 1 win!</h2>
      {}
      <h2>Currently with 1+ wins!</h2>
    </article>
  );
}

export default Player;