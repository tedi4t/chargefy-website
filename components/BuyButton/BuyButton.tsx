import React from 'react';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { WButton, Wrapper, QuantityButton, Quantity } from './BuyButton.styles';

export default function ({
	quantity,
	setQuantity,
}: {
	quantity: number;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
	const handleAddClick = () => {
		setQuantity(quantity + 1);
	}

	const handleRemoveClick = () => {
		setQuantity(quantity - 1);
	}

	return (
		<Wrapper>
			{quantity === 0 ? (
				<WButton onClick={() => setQuantity(1)}>Buy</WButton>
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
