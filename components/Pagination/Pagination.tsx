import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

export interface PaginationProps {
	page: number;
	pageCount: number;
}

export default function PaginationComponent({ page, pageCount }: PaginationProps) {
	const router = useRouter();

	const onChange = (e: any, value: any) => {
		router.push({ query: { page: value } });
	};

	return (
		<Pagination count={pageCount} color='primary' size='large' page={page} onChange={onChange} />
	);
}
