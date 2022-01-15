import React from 'react';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { WButton, Wrapper, QuantityButton, Quantity } from './BuyButton.styles';

export default function BuyButton({
	quantity,
	handleAddClick,
	handleRemoveClick,
}: {
	quantity: number;
	handleAddClick: () => void;
	handleRemoveClick: () => void;
}) {
	return (
		<Wrapper>
			{quantity === 0 ? (
				<WButton onClick={handleAddClick}>Buy</WButton>
			) : (
				<>
					<QuantityButton onClick={handleRemoveClick}>
						<RemoveOutlinedIcon />
					</QuantityButton>
					<Quantity>{quantity}</Quantity>
					<QuantityButton onClick={handleAddClick}>
						<AddOutlinedIcon />
					</QuantityButton>
				</>
			)}
		</Wrapper>
	);
}
