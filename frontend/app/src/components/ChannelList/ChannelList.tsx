import { useEffect, useState } from 'react';
import axios from 'axios';

type ChannelList = {
  id: number;
  name: string;
}[]

export const ChannelList = () => {
  const [channelList, setChannelList] = useState<ChannelList>([])

  // 本番環境と開発環境でbaseのurlを分けたい
  useEffect(() => {
    axios.get('http://localhost:3000/favorite_channels').then(res => {
      console.log(res.data.favorite_channels)
      setChannelList(res.data.favorite_channels)
    })
  }, [])

  return (
    <>
      <ul>
        {channelList.map(channel => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </>
  )
}
