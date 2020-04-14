import App from 'next/app'
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/Page'),
  {
    loading: () => <p style={{ textAlign: 'center' }}>...</p>
  }
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.pathname = ctx.pathname
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <DynamicComponentWithCustomLoading>
        <Component {...pageProps} />
      </DynamicComponentWithCustomLoading>
    )
  }
}

export default MyApp
