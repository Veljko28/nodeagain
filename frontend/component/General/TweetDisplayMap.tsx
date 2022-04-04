import { PostInterface } from "../customInterfaces/PostInterface"
import TweetDisplay from "../TweetDisplay"

const customPosts = [
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

export const TweetDisplayMap = ({posts} : {posts?: PostInterface[]}) => {
  // map array of posts to array of TweetDisplay components
  const tweetDisplay = customPosts.map((post, index) => {
    return <TweetDisplay key={index} {...post} />
  })

  return (
    <>
      {tweetDisplay}
    </>
    );
}