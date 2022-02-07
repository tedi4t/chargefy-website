import React from 'react';

import Box from '@mui/material/Box';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { WButton, Wrapper, QuantityButton, Quantity } from './BuyButton.styles';
import { useIntl } from 'react-intl';

export default function BuyButton({
	quantity,
	handleAddClick,
	handleRemoveClick,
}: {
	quantity: number;
	handleAddClick: () => void;
	handleRemoveClick: () => void;
}) {
	const intl = useIntl();

	return (
		<Wrapper>
			{quantity === 0 ? (
				<WButton onClick={handleAddClick}>
					{intl.formatMessage({ id: 'buyButton.text' })}
				</WButton>
			) : (
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: { xs: 'center', md: 'flex-start' },
					}}
				>
					<QuantityButton onClick={handleRemoveClick}>
						<RemoveOutlinedIcon />
					</QuantityButton>
					<Quantity>{quantity}</Quantity>
					<QuantityButton onClick={handleAddClick}>
						<AddOutlinedIcon />
					</QuantityButton>
				</Box>
			)}
		</Wrapper>
	);
}
