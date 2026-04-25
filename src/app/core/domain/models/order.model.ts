/**
 * Interfaz que representa una orden del sistema.
 *
 * @remarks
 * Cada orden debe tener un id único, número de orden, información del cliente,
 * precio total, estado y fecha de creación.
 */
export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Número de orden (referencia del cliente) */
  orderNumber: string;

  /** Nombre del cliente que realiza la orden */
  customerName: string;

  /** Precio total de la orden en pesos */
  totalPrice: number;

  /** Estado de la orden */
  status: OrderStatus;

  /** Fecha de creación de la orden */
  createdDate: Date;

  /** Cantidad de artículos en la orden */
  itemsCount: number;
}

/**
 * Tipo de estado de una orden.
 *
 * @remarks
 * Estados posibles de una orden:
 * - 'Pending' - Orden recibida, pendiente de procesar
 * - 'Processing' - Orden en proceso
 * - 'Completed' - Orden completada
 * - 'Cancelled' - Orden cancelada
 */
export type OrderStatus = 'Pending' | 'Processing' | 'Completed' | 'Cancelled';