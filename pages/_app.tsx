import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import uk from '../intl/uk.json';
import { ShoppingCartProvider } from '../contexts/shoppingCart';
import { ShoppingCartChecker } from '../components';
import { themeOptions } from '../themes/theme';

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
