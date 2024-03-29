import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import "@fontsource/roboto/300.css"
import Header from './header'
import Sidebar from './sidebar'

export const siteTitle = 'Kawaida Blog'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    padding: '24px',
  },
  children: {
    marginRight: theme.spacing(10),
  }
}));

export default function Layout({ children, home }) {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header title={siteTitle}/>
      <main>
        <Grid
          container
          direction="row"
          justifyContent="center"
          className={classes.main}
        >
          <Grid
            container
            item
            direction='column'
            xs={12} md={6}
            className={classes.children}
          >
            {children}
          </Grid>
          <Sidebar />
        </Grid>
      </main>
    </div>
  )
}
