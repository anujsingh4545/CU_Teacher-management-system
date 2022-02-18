import Head from 'next/head'
import Teacher from '../components/Teacher'
import Searchpanel from '../components/Searchpanel'
import Infocall from '../components/Infocall'

export default function Home() {
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
