import { PropsWithChildren } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function SpaceBetweenWrapper({ children }: PropsWithChildren<{}>) {
	return (
		<Box position={'fixed'} top={0} bottom={0} left={0} right={0}>
			<Grid
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'space-between'}
				height={'100%'}
			>
				{children}
			</Grid>
		</Box>
	);
}
