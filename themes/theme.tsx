import { Theme, ThemeOptions } from '@mui/material/styles';

export interface ThemeProps {
	theme: Theme;
}

export const themeOptions: ThemeOptions = {
	palette: {
		primary: { contrastText: '#ffffff', main: '#e99c2e', light: '#F2F3FC' },
		secondary: { contrastText: '#ffffff', main: '#efefef' },
		background: { default: '#f4f5f7', paper: '#ffffff' },
		text: { primary: '#253858', secondary: '#68758B' },
		action: { active: '#6b778c' },
		success: { contrastText: '#ffffff', main: '#4caf50', light: '#EDF7ED' },
		warning: { contrastText: '#ffffff', main: '#ff9800' },
		error: { contrastText: '#ffffff', main: '#f44336' },
		grey: {
			'50': '#BDBDBD',
			'300': '#E0E0E0',
			'500': '#D0D4DB',
			'700': '#DFDFDF',
			'800': '#F4F5F7',
		},
	},
};
