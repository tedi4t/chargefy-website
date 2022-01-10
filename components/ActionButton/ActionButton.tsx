import { WButton } from './ActionButton.styles';

export default function ({ children, ...rest }: any) {
	return <WButton {...rest}>{children}</WButton>;
}
