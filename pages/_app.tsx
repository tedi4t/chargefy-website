import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import uk from '../intl/uk.json';

const IntlProviderComponent = ({ children }: any) => {
	const router = useRouter();

	return (
		<IntlProvider
			key={router.locale}
			locale={router.locale || 'en'}
			defaultLocale={router.locale}
			messages={uk}
		>
			{children}
		</IntlProvider>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<IntlProviderComponent>
			<Component {...pageProps} />
		</IntlProviderComponent>
	);
}

export default MyApp;
