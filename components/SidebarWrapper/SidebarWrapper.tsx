import { SidebarWrapper } from './SidebarWrapper.styles';

export default function SidebarWrapperComponent({ children, ...props }: any) {
	return <SidebarWrapper {...props}>{children}</SidebarWrapper>;
}
