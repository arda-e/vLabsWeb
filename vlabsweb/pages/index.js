import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Visium Labs</title>
      </Head>

      <main className="h-full">
        <div className="flex align-center justify-center">
          <h1 className="text-6xl text-red-700">
            Welcome to Visium Labs
        </h1>
        </div>
      </main>
    </div>
  )
}
