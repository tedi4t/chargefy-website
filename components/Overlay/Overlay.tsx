import React from 'react';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { Overlay, WButton } from './Overlay.styles';

export interface OverlayComponentProps {
	opened: boolean;
	onClose: () => void;
	children: JSX.Element;
}

export default function OverlayComponent({ opened, children, onClose }: OverlayComponentProps) {
	return (
		<Overlay open={opened}>
			<Box sx={{ position: 'absolute', top: '2.5rem', right: '2.5rem', zIndex: 1300 }}>
				<WButton onClick={onClose}>
					<CloseOutlinedIcon />
				</WButton>
			</Box>
			{children}
		</Overlay>
	)
}