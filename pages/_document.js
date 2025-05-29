import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zxx">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="HTML5 Template Hubfolio Multi-Purpose themeforest" />
        <meta name="description" content="Hubfolio - Multi-Purpose HTML5 Template" />
        <meta name="author" content="" />
        
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        
        <link rel="stylesheet" href="/common/css/plugins.css" />
        <link rel="stylesheet" href="/common/css/common_style.css" />
        <link rel="stylesheet" href="/assets/css/home1-style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
