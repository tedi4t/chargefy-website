import { Wrapper, Title } from './Title.styles';

interface TitleProps {
	text: string;
}

export default function ({ text }: TitleProps) {
	return (
		<Wrapper>
			<Title>{text}</Title>
		</Wrapper>
	);
}
