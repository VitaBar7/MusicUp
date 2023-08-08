import { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
  title: 'Look Up',
  description: 'This is about music'
}


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Look up!</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
