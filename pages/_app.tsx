import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import uk from '../intl/uk.json';
import { ShoppingCartProvider } from '../contexts/shoppingCart';
import { ShoppingCartChecker } from '../components';

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
			<ShoppingCartProvider>
				<ShoppingCartChecker>
					<Component {...pageProps} />
				</ShoppingCartChecker>
			</ShoppingCartProvider>
		</IntlProviderComponent>
	);
}

export default MyApp;
