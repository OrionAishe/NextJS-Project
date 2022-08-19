import NavigationBar from '../components/layout/navigationbar'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NavigationBar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
