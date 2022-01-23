import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel='icon' href='/favicon.ico' />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
