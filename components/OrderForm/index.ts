import OrderForm from './OrderForm';

export default OrderForm;

export interface NovaPoschtaInfo {
	name: string;
	ref: string;
}

export interface OrderFormValue {
	name: string | null;
	surname: string | null;
	middleName: string | null;
	phoneNumber: string | null;
	payment: 'cash' | 'card' | null;
	area: NovaPoschtaInfo | null;
	city: NovaPoschtaInfo | null;
	warehouse: NovaPoschtaInfo | null;
}