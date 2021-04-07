import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    console.log('MyDocumentMyDocumentMyDocumentMyDocument')
    return (
      <Html>
        <Head />
        <body className="loading">
          <Main />

          <script src="https://festive-euler-59abd3.netlify.app/assets/js/jquery.min.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/bootstrap.bundle.min.js"></script>
          <script src="https://unpkg.com/swiper@6.5.4/swiper-bundle.min.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/theia-sticky-sidebar.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/waypoints.min.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/counterup.min.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/lightcase.js"></script>

          <script src="https://festive-euler-59abd3.netlify.app/assets/js/custom-select.js"></script>
          <script src="https://festive-euler-59abd3.netlify.app/assets/js/functions.js"></script>

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
