import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';

/**
 * Caso de uso para obtener el listado completo de órdenes.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y encapsula
 * la acción de negocio encargada de recuperar todas las órdenes
 * del sistema.
 *
 * Desacopla la capa de presentación de los detalles de acceso a datos
 * mediante el contrato `OrderRepository`.
 *
 * @remarks
 * - No depende de implementaciones concretas.
 * - No maneja estados de UI.
 * - Propaga errores al consumidor.
 *
 * @example
 * ```ts
 * this.getAllOrdersUseCase.execute(10).subscribe(orders => {
 *   // manejo de resultados
 * });
 * ```
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Order
 * @see OrderRepository
 */
@Injectable()
export class GetAllOrdersUseCase {

  /**
   * Repositorio de órdenes inyectado por contrato.
   *
   * @remarks
   * La implementación concreta se define en la capa de infraestructura.
   */
  private orderRepository = inject(OrderRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countOrders - Cantidad de órdenes a obtener
   * @returns {Observable<Order[]>}
   * Observable que emite el listado completo de órdenes del dominio.
   */
  execute(countOrders: number): Observable<Order[]> {
    return this.orderRepository.getAll(countOrders);
  }
}