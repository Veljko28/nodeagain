import { Grid } from '@mui/material';
import { TweetDisplayMap } from '../component/General/TweetDisplayMap';
import TitleChange from '../component/TitleChange';
import TweetForm from '../component/TweetForm';

export default function Home() {
  return (
    <Grid container>
       <TitleChange title="Home / Twitter" />
       <TweetForm/>
       <TweetDisplayMap/>
    </Grid>
  )
}
