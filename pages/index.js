import MapComponent from '@/components/maobox/Mapcomponent'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Homes -Kaya</title>
        <meta name="description" content="Welcome Homes -Kaya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <MapComponent/>
      </div>
    </>
  )
}
