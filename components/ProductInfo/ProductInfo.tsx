import {
	Title,
	Description,
	Characheristics,
	Characheristic,
	Key,
	Value,
	WButton,
	Price,
} from './ProductInfo.styles';
import { ProductInfoProps } from './index';

export default function (props: ProductInfoProps) {
	return (
		<div>
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
			<Characheristics>
				{Object.keys(props.characteristic).map(characteristic => (
					<Characheristic key={characteristic}>
						<Key>{characteristic}:&nbsp;</Key>
						<Value>{props.characteristic[characteristic]}</Value>
					</Characheristic>
				))}
			</Characheristics>
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
			<WButton>Buy</WButton>
		</div>
	);
}
