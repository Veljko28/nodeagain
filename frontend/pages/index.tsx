import { Grid } from '@mui/material';
import Sidebar from '../component/General/Sidebar';
import TitleChange from '../component/TitleChange';
import TweetForm from '../component/TweetForm';

export default function Home() {
  return (
    <Grid container>
       <TitleChange title="Home / Twitter" />
       <TweetForm/>
    </Grid>
  )
}
