import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

export interface PaginationProps {
	page: number;
}

export default function PaginationComponent({ page }: PaginationProps) {
	const router = useRouter();

	const onChange = (e: any, value: any) => {
		router.push({ query: { page: value }})
	}

	return (
		<Pagination
			count={10}
			color="primary"
			size="large"
			page={page}
			onChange={onChange}
		/>
	);
}