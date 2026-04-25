import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

/**
 * Contrato del repositorio de órdenes.
 *
 * @description
 * Define el contrato de acceso a datos para la entidad `Order`
 * dentro de la **capa de dominio**, siguiendo los principios de
 * Clean Architecture.
 *
 * @remarks
 * Las implementaciones pueden variar (API REST, GraphQL,
 * almacenamiento local, mocks, etc.) sin afectar a los casos de uso.
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Order
 */
export abstract class OrderRepository {

  /**
   * Obtiene el listado completo de órdenes.
   *
   * @param countOrders - Cantidad de órdenes a recuperar
   * @returns {Observable<Order[]>}
   * Observable que emite un arreglo de órdenes del dominio.
   *
   * @remarks
   * - No conoce la fuente de datos.
   * - No transforma entidades de presentación.
   * - Mantiene el dominio independiente de la infraestructura.
   */
  abstract getAll(countOrders: number): Observable<Order[]>;
}