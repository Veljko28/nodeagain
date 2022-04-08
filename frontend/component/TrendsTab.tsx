import { Typography } from '@mui/material'
import React from 'react'
import TrendDisplay from './TrendDisplay'


const trends = [
  {
    header: 'Trending in Serbia',
    main: '#Serbia',
    num_of_tweets: '1.2M tweets'
  },
  {
    header: 'Trending in Europe',
    main: '#Ukraine',
    num_of_tweets: '400K tweets'
  },
  {
    header: 'Trending',
    main: '#Trump',
    num_of_tweets: '240K tweets'
  },
  {
    header: 'Politics', 
    main: 'Nazis',
    num_of_tweets: '121K tweets'
  },
  {
    header: 'Sports',
    main: 'Jokic',
    num_of_tweets: '40.6k tweets'
  },
  {
    header: 'Trending in Serbia',
    main: '#IsraelCalling',
    num_of_tweets: '6,377 tweets'
  },
  {
    header: 'Sports',
    main: '#NBA',
    num_of_tweets: '4M tweets'
  },
  {
    header: 'Technology',
    main: '#iPhone',
    num_of_tweets: '10M tweets'
  }
]


const TrendsTab = () => {
  return (
    <div style={{marginTop: 10, marginBottom: 10, backgroundColor: '#fafafa', width: 350, borderRadius: 20}}>
      <Typography variant="h6" style={{padding: 10, fontWeight: '800'}}>Trends For You</Typography>
      {trends.map((x,idx) => <TrendDisplay key={idx} {...x} />)}
      <Typography color="primary" className="hoverFx" 
      style={{padding: 10, borderEndEndRadius: 25, borderEndStartRadius: 25, cursor: 'pointer'}} >Show More</Typography>
    </div>
  )
}

export default TrendsTab