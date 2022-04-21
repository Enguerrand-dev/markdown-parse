import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import InputHtml from '../components/InputHtml'
import OutputMarkdown from '../components/OutputMarkdown'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-20 text-4xl font-bold">Markdown preview</h1>
        <div className="grid w-full grid-cols-2 justify-between gap-3">
          <InputHtml />
          <OutputMarkdown />
        </div>
      </main>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}

export default Home
