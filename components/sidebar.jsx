import { Avatar, Grid, IconButton, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'

export default function Sidebar() {
  return (
    <Grid
      container
      item
      xs={12} md={2}
    >
      <Grid
        item
        xs={12}
      >
        <Avatar
          src="/images/profile.jpg"
          valiant="circle"
          style={{ width: '160px', height: '160px' }}
          alt='tamamushi icon'
        />
      </Grid>
      <Typography variant="subtitle2">
        Software Engineer MedPeer,Inc
      </Typography>
      <Typography variant="subtitle2">
        Ruby / Rails / Vue.js / DIVEINTOCODE / ex. farmer / sauna / bouldering
      </Typography>
      <IconButton aria-label="twitter">
        <a href="https://twitter.com/tamamushi_2">
          <TwitterIcon />
        </a>
      </IconButton>
    </Grid>
  )
}
