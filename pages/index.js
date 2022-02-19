import Head from 'next/head'
import React, { useEffect } from 'react'
import Teacher from '../components/Teacher'
import Searchpanel from '../components/Searchpanel'
import Infocall from '../components/Infocall'
import { getProviders, useSession } from 'next-auth/react'
import Signin from '../components/Signin'
import { useRecoilState, useRecoilValue } from 'recoil'
import { checkPassword } from '../atom/checkPassword'
import { db } from '../firebase'

export default function Home({ providers }) {
  const { data: session } = useSession()
  const [password, setPassword] = useRecoilState(checkPassword)

  if (!session) return <Signin providers={providers} />
  if (password === 'false') return <Signin providers={providers} />

  return (
    <div className=" min-h-[100vh] ">
      <Head>
        <title>Teacher-Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Teacher />
      <Searchpanel />
      <Infocall />
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
