import { Provider } from 'next-auth/client'

import { Base } from '../ui/layout/base'

import '../public/reset.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session} options={{
      clientMaxAge: 60, // Re-fetch session if cache is older than 60 seconds
      keepAlive: 5 * 60, // Send keepAlive message every 5 minutes
    }}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </Provider>
  )
}

export default MyApp
