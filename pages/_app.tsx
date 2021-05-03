import React from 'react'
import '../css/antd.less'
import { Layout } from 'antd'

function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout
  return (
    <Layout style={{ }}>
      <Header>
        <h2>COVID Timeline Generator</h2>
      </Header>
      <Content {...pageProps}>{/* <Component {...pageProps} /> */}</Content>
    </Layout>
  )
}

export default MyApp
