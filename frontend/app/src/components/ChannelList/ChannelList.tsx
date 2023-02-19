import { useEffect, useState } from 'react';
import axios from 'axios';

import { Dashboard } from '../Dashboard/Dashboard'

type Channels = {
  id: number;
  name: string;
}[]

export const ChannelList = () => {
  const [channelList, setChannelList] = useState<Channels>([])

  // 本番環境と開発環境でbaseのurlを分けたい
  useEffect(() => {
    axios.get('http://localhost:3000/favorite_channels').then(res => {
      console.log(res.data.favorite_channels)
      setChannelList(res.data.favorite_channels)
    })
  }, [])

  return (
    <>
      <Dashboard />
      <ul>
        {channelList.map(channel => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </>
  )
}
