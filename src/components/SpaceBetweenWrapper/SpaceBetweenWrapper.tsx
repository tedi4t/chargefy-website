import { PropsWithChildren } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function SpaceBetweenWrapper ({ children }: PropsWithChildren<{}>) {
	return (
		<Box position={'relative'} height={'100%'}>
			<Grid display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
				{children}
			</Grid>
		</Box>
	)
}