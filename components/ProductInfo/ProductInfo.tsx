import {
	Title,
	Description,
	Characheristics,
	Characheristic,
	Key,
	Value,
	WButton,
} from './ProductInfo.styles';

export default function () {
	const characteristics = [
		{
			key: 'Lorem ipsum',
			value: 'sit amet',
		},
		{
			key: 'consectetur adipisicing',
			value: 'elit',
		},
		{
			key: 'Aspernatur autem beatae',
			value: 'mollitia',
		},
		{
			key: 'necessitatibus non',
			value: 'officiis quaerat quasi',
		},
	];
	return (
		<div>
			<Title>Lorem ipsum dolor sit.</Title>
			<Description>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias eaque impedit
				ipsum itaque possimus quidem recusandae sit ut vitae.
			</Description>
			<Characheristics>
				{characteristics.map(characteristic => (
					<Characheristic>
						<Key>{characteristic.key}:&nbsp;</Key>
						<Value>{characteristic.value}</Value>
					</Characheristic>
				))}
			</Characheristics>
			<WButton>Buy</WButton>
		</div>
	);
}
