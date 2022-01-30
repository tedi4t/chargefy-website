import {
	Title,
	Description,
	Characheristics,
	Characheristic,
	Key,
	Value,
	Price,
} from './ProductInfo.styles';
import { ProductInfoProps } from './index';

export default function ProductInfo(props: ProductInfoProps) {
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
				{props.beforePrice ? (
					<>
						<span className={'crossed'}>₴{props.beforePrice}</span>
						<span className={'sale'}>₴{props.price}</span>
					</>
				) : (
					<>₴{props.price}</>
				)}
			</Price>
		</div>
	);
}
