import { Order } from '../core/domain/models/order.model';

export const ORDERS_MOCK: Order[] = [
	{
		id: 1,
		orderNumber: 'ORD-001',
		customerName: 'Juan Perez',
		totalPrice: 150000,
		status: 'Completed',
		createdDate: new Date('2026-04-10T08:00:00.000Z'),
		itemsCount: 3,
	},
	{
		id: 2,
		orderNumber: 'ORD-002',
		customerName: 'Maria Gomez',
		totalPrice: 82000,
		status: 'Pending',
		createdDate: new Date('2026-04-11T10:30:00.000Z'),
		itemsCount: 2,
	},
	{
		id: 3,
		orderNumber: 'ORD-003',
		customerName: 'Carlos Ramirez',
		totalPrice: 240500,
		status: 'Processing',
		createdDate: new Date('2026-04-12T14:15:00.000Z'),
		itemsCount: 6,
	},
];
