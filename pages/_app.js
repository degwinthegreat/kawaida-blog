import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
