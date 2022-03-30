import { Grid } from '@mui/material';
import Sidebar from '../component/Sidebar';
import TweetForm from '../component/TweetForm';

export default function Home() {
  return (
    <Grid container>
      <Grid xs={2} item/>

      <Grid xs={1} item>
        <Sidebar/>
      </Grid>

      <Grid xs={6} item>
        <TweetForm/>
      </Grid>

      <Grid xs={2} item/>
    </Grid>
  )
}
