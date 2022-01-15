import { WButton } from './ActionButton.styles';

export default function ActionButton({ children, ...rest }: any) {
	return <WButton {...rest}>{children}</WButton>;
}
