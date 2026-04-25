import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../../core/domain/models/order.model';

@Component({
	selector: 'app-orders-table',
	templateUrl: './orders-table.component.html',
	imports: [CommonModule, BadgeAtom],
})
export class OrdersTableComponent {
	@Input() orders: Order[] = [];

	statusMap: Record<OrderStatus, BadgeType> = {
		Pending: 'warning',
		Processing: 'primary',
		Completed: 'success',
		Cancelled: 'danger',
	};
}
