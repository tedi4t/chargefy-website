import SidebarWrapper from './SidebarWrapper';

export default function SidebarWrapperComponent({ children }: any) {
	return (
		<SidebarWrapper>
			{children}
		</SidebarWrapper>
	)
}