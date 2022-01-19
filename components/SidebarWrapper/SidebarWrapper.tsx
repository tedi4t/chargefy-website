import { SidebarWrapper } from './SidebarWrapper.styles';

export default function SidebarWrapperComponent({ children }: any) {
	return (
		<SidebarWrapper>
			{children}
		</SidebarWrapper>
	)
}