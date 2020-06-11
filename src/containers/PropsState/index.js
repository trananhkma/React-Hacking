import React from 'react';

import Playlist from '../../components/Playlist';
import data from '../../data/songs.json'


const PropsState = () => (
  <Playlist songs={data.songs}/>
)

export default PropsState;
