import { Component, inject } from '@angular/core';
import { GetAllOrdersUseCase } from '../../../core/application/usecases/get-all-orders.usecase';
import { Order } from '../../../core/domain/models/order.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { State } from '../../interfaces/state.interface';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.page.html',
	imports: [OrdersTableComponent, AlertComponent],
	providers: [GetAllOrdersUseCase],
})
export class OrdersPage {
	orders: Order[] = [];
	state: State = 'init';

	private getAllOrdersUseCase = inject(GetAllOrdersUseCase);

	ngOnInit(): void {
		this.state = 'loading';
		this.getAllOrdersUseCase.execute(10).subscribe({
			next: (orders) => {
				this.orders = orders;
				this.state = 'success';
			},
			error: (error) => {
				console.error(error);
				this.state = 'error';
			},
		});
	}
}
