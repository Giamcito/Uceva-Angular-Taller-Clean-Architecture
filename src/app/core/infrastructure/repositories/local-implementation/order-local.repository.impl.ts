import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../../../domain/models/order.model";
import { OrderRepository } from "../../../domain/repositories/order.repository";
import { DataService } from "../../services/data.service";

/**
 * Implementación concreta del repositorio de órdenes con datos locales.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **Adapter** entre el dominio y la fuente de datos local.
 *
 * Implementa el contrato {@link OrderRepository}
 * utilizando {@link DataService} como datasource.
 *
 * @see {@link OrderRepository}
 * @see {@link DataService}
 */
@Injectable()
export class OrderLocalRepositoryImpl extends OrderRepository {

    /**
     * Datasource encargado de obtener los datos de órdenes.
     */
    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de órdenes desde datos locales.
     *
     * @param countOrders - Cantidad de órdenes a solicitar
     * @returns Observable que emite un arreglo de {@link Order}
     */
    getAll(countOrders: number): Observable<Order[]> {
        return this.dataService.getAllOrdersLocal(countOrders);
    }
}