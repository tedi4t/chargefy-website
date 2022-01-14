import Link from 'next/link';
import Grid from '@mui/material/Grid';

import { Wrapper, Title, Description, Subtitle, WButton, TextWrapper } from './Info.styles';

interface InfoProps {
	title: string;
	description: string;
	price: number;
	link: string;
}

export default function Info (props: InfoProps) {
	return (
		<Grid container spacing={2} position={'relative'}>
			<Grid item container xs={6}>
				<Wrapper>
					<Title>{props.title}</Title>
					<Description>{props.description}</Description>
					<Subtitle>
						Від <span className='highlighted'>₴{props.price}</span>
					</Subtitle>
					<WButton>
						<Link href={props.link}>
							<a>
								<TextWrapper>Перейти</TextWrapper>
							</a>
						</Link>
					</WButton>
				</Wrapper>
			</Grid>
		</Grid>
	);
}
