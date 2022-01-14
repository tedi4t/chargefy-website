import Sidebar from './Sidebar';

export interface FiltersProps {
	categories: Array<number> | null;
	colors: Array<number> | null;
	minPrice: number | null;
	maxPrice: number | null;
}

export default Sidebar;
