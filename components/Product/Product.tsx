import Image from 'next/image';
import Link from 'next/link';

import { Wrapper, Title, Price } from './Product.style';
import { ImageResponse } from '../../lib/apiResponse';

export interface ProductProps {
	id: number;
	mainImg: ImageResponse;
	title: string;
	price: number;
	beforePrice?: number;
}

export default function Product(props: ProductProps) {
	return (
		<>
			<Link
				href={{
					pathname: '/products/[id]',
					query: { id: props.id },
				}}
			>
				<a>
					<Wrapper>
						<div className={'hover_decoration'} />

						<Image
							src={props.mainImg.url}
							width={props.mainImg.width}
							height={props.mainImg.height}
							alt={props.mainImg.alternativeText}
						/>

						<Title>{props.title}</Title>

						<Price>
							{props.beforePrice ? (
								<>
									<span className={'crossed'}>₴{props.beforePrice}</span>
									<span className={'sale'}>₴{props.price}</span>
								</>
							) : (
								<>₴{props.price}</>
							)}
						</Price>
					</Wrapper>
				</a>
			</Link>
		</>
	);
}
