import Image from 'next/image';
import Link from 'next/link';

import { Wrapper, Title, Price } from './Product.style';

export interface ProductProps {
	id: number;
	img: {
		url: string;
		width: number;
		height: number;
	};
	title: string;
	price: number;
	sale?: number;
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

						<Image src={props.img.url} width={props.img.width} height={props.img.height} />

						<Title>{props.title}</Title>

						<Price>
							{props.sale ? (
								<>
									<span className={'crossed'}>₴{props.price}</span>
									<span className={'sale'}>₴{props.sale}</span>
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
