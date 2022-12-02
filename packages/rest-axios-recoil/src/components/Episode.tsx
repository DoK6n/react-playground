import React, { MouseEvent, useEffect, useState } from 'react';
import { getEpisode } from '../lib/api/episode/getEpisode';

function Episode() {
  const [episode, setEpisode] = useState(null);
  useEffect(() => {
    console.log(episode);
  }, [episode]);

  const onClikeGetEpisode = async (e: MouseEvent<HTMLButtonElement>) => {
    const episodeData = await getEpisode();
    setEpisode(episodeData);
  };
  return <button onClick={onClikeGetEpisode}>에피소드 불러오기</button>;
}

export default Episode;
