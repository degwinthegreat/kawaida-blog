import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  profileIcon: {
    margin: '0 auto',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  snsLink: {
    color: 'black',
    textDecoration: 'none',
  },
  snsIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  snsAvatar: {
    backgroundColor: 'black',
    fontWeight: 'bold',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      xs={12} md={2}
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Avatar
          src="/images/profile.jpg"
          valiant="circle"
          className={classes.profileIcon}
          alt='tamamushi icon'
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Typography variant="subtitle2">
          Software Engineer MedPeer,Inc
        </Typography>
        <Typography variant="subtitle2">
          Ruby / Rails / Vue.js / DIVEINTOCODE / ex. farmer / sauna / bouldering
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        item
        xs={12}
      >
        <a href="https://twitter.com/tamamushi_2" className={classes.snsLink} >
          <TwitterIcon className={classes.snsIcon}/>
        </a>
        <a href="https://github.com/degwinthegreat" className={classes.snsLink} >
          <GitHubIcon className={classes.snsIcon} />
        </a>
        <a href="https://note.com/tamamushi_" className={classes.snsLink} >
          <Avatar className={classes.snsAvatar} >N</Avatar>
        </a>
        <a href="https://qiita.com/degwinthegreat" className={classes.snsLink} >
          <Avatar className={classes.snsAvatar} >Q</Avatar>
        </a>
        <a href="https://zenn.dev/degwinthegreat" className={classes.snsLink} >
          <Avatar className={classes.snsAvatar} >Z</Avatar>
        </a>
      </Grid>
    </Grid>
  )
}
