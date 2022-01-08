import React from 'react';
import Image from 'next/image';

import Container from '@mui/material/Container';

import { Overlay } from './Paper.styles';

export interface PaperProps {
	img: any;
	element: JSX.Element;
}

export default function Paper(props: PaperProps) {
	return (
		<div style={{ position: 'relative' }}>
			<div>
				<Image alt='Mountains' src={props.img} layout='fill' objectFit='cover' />
			</div>

			<Overlay />

			<Container>{props.element}</Container>
		</div>
	);
}
