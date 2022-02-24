import { RecoilRoot, useRecoilState } from 'recoil'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      {/*  */}

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>

      {/*  */}
    </SessionProvider>
  )
}

export default MyApp
