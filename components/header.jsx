import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  header: {
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    margin: theme.spacing(5),
  },
}));

export default function Header(props) {
  const { title } = props;
  const classes = useStyles();

  return (
    <Container className={classes.header}>
      <Link href="/">
        <a
          style={{ color: 'black', textDecoration: 'none' }}
        >
          <Typography variant="h2" component="h1" className={classes.title}>
            {title}
          </Typography>
        </a>
      </Link>
    </Container>
  )
}
