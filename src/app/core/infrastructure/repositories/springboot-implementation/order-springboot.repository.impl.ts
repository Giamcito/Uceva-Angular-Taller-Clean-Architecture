import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../../../domain/models/order.model";
import { OrderRepository } from "../../../domain/repositories/order.repository";
import { DataService } from "../../services/data.service";

/**
 * Implementación concreta del repositorio de órdenes con backend SpringBoot.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**.
 * Se conecta al backend SpringBoot a través del {@link DataService}.
 *
 * @see {@link OrderRepository}
 * @see {@link DataService}
 */
@Injectable()
export class OrderSpringBootRepositoryImpl extends OrderRepository {

    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de órdenes desde backend SpringBoot.
     *
     * @param countOrders - Cantidad de órdenes a solicitar
     * @returns Observable que emite un arreglo de {@link Order}
     */
    getAll(countOrders: number): Observable<Order[]> {
        return this.dataService.getAllOrdersSpringBoot(countOrders);
    }
}