import React from 'react'
import Helmet from 'react-helmet'

export default class MainContainer extends React.Component {
  render () {
    return (
      <div>
        <Helmet
            htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
            title="tGoals"
            meta={[
              { charset: 'UTF-8'},
              { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
              { httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
              { name: "msapplication-TileColor", content:"#ffffff" },
              { name: "msapplication-TileImage", content: require("../assets/icon/ms-icon-144x144.png") },
              { name: "theme-color", content:"#ffffff" },
            ]}
            link={[
              {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css", integrity:"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ", crossorigin:"anonymous"},
              { rel: "apple-touch-icon", sizes: "57x57", href: require("../assets/icon/apple-icon-57x57.png") },
              { rel: "apple-touch-icon", sizes: "60x60", href: require("../assets/icon/apple-icon-60x60.png") },
              { rel: "apple-touch-icon", sizes: "72x72", href: require("../assets/icon/apple-icon-72x72.png") },
              { rel: "apple-touch-icon", sizes: "76x76", href: require("../assets/icon/apple-icon-76x76.png") },
              { rel: "apple-touch-icon", sizes: "114x114", href: require("../assets/icon/apple-icon-114x114.png") },
              { rel: "apple-touch-icon", sizes: "120x120", href: require("../assets/icon/apple-icon-120x120.png") },
              { rel: "apple-touch-icon", sizes: "144x144", href: require("../assets/icon/apple-icon-144x144.png") },
              { rel: "apple-touch-icon", sizes: "152x152", href: require("../assets/icon/apple-icon-152x152.png") },
              { rel: "apple-touch-icon", sizes: "180x180", href: require("../assets/icon/apple-icon-180x180.png") },
              { rel: "icon", type: "image/png", sizes: "192x192",  href: require("../assets/icon/android-icon-192x192.png") },
              { rel: "icon", type: "image/png", sizes: "32x32", href: require("../assets/icon/favicon-32x32.png") },
              { rel: "icon", type: "image/png", sizes: "96x96", href: require("../assets/icon/favicon-96x96.png") },
              { rel: "icon", type: "image/png", sizes: "16x16", href: require("../assets/icon/favicon-16x16.png") },
            ]}
        />
        { this.props.children }
      </div>
    )
  }
}