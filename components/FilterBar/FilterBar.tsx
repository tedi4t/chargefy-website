import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Wrapper, TopLine, FilterIcon, Text, SortIcon, WButton } from './FilterBar.styles';

export default function FilterBar() {
	return (
		<>
			<TopLine />
			<Wrapper>
				<Container>
					<Grid container justifyContent={'space-between'} flexDirection={'row'}>
						<Grid item>
							<WButton>
								<Grid container sx={{ width: 'unset' }} alignItems={'center'}>
									<FilterIcon />
									<Text>
										Filter
									</Text>
								</Grid>
							</WButton>
						</Grid>

						<Grid item>
							<WButton>
								<Grid container sx={{ width: 'unset' }} alignItems={'center'}>
									<Text>
										Sort
									</Text>
									<SortIcon />
								</Grid>
							</WButton>
						</Grid>
					</Grid>
				</Container>
			</Wrapper>
		</>
	);
}