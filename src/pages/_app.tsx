import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import uk from '../../lang/uk.json';
import ru from '../../lang/ru.json';
import { ShoppingCartProvider } from '../contexts/shoppingCart';
import { ShoppingCartChecker } from '../components';
import { themeOptions } from '../../themes/theme';
import { useEffect } from 'react';
import { pageview } from '../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

const IntlProviderComponent = ({ children }: any) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			/* invoke analytics function only for production */
			if (isProduction) pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<IntlProvider
			key={router.locale}
			locale={router.locale || 'uk'}
			defaultLocale={router.locale}
			messages={router.locale === 'ru' ? ru : uk}
		>
			{children}
		</IntlProvider>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	const theme = createTheme(themeOptions);

	return (
		<IntlProviderComponent>
			<EmotionThemeProvider theme={theme}>
				<MuiThemeProvider theme={theme}>
					<ShoppingCartProvider>
						<ShoppingCartChecker>
							<Component {...pageProps} />
						</ShoppingCartChecker>
					</ShoppingCartProvider>
				</MuiThemeProvider>
			</EmotionThemeProvider>
		</IntlProviderComponent>
	);
}

export default MyApp;
