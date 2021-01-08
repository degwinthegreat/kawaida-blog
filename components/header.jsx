import Link from 'next/link'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header(props) {
  const { title } = props;
  return (
    <AppBar position="static" color="inherit">
      <Toolbar component="nav" variant="dense">
        <Link
          href="/"
        >
          <a
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <Typography variant="h6">
              {title}
            </Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
