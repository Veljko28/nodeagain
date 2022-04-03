import { Grid } from '@mui/material';
import TitleChange from '../component/TitleChange';
import TweetDisplay from '../component/TweetDisplay';


const posts = [
  { username: "Username",
    at: "username",
    time: "1h",
    text: "This is a tweet text that is going to be displayed in the tweet display component", 
    image: "../public/flag-of-ukraine.png",
    comments: 8,
    retweets: 17,
    likes: 31
  },
  { username: "Username",
    at: "username",
    time: "1h",
    text: "This is a tweet text that is going to be displayed in the tweet display component", 
    image: "../public/flag-of-ukraine.png",
    comments: 8,
    retweets: 17,
    likes: 31
  }
]

// map array of posts to array of TweetDisplay components
const tweetDisplay = posts.map((post, index) => {
  return <TweetDisplay key={index} {...post} />
})

export default function Home() {
  return (
    <Grid container>
       <TitleChange title="Home / Twitter" />
       {tweetDisplay}
    </Grid>
  )
}
