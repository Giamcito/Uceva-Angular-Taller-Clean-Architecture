import { TestBed } from "@angular/core/testing";
import { firstValueFrom, of, throwError } from "rxjs";
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { GetAllOrdersUseCase } from './get-all-orders.usecase';

describe('GetAllOrdersUseCase', () => {
  let useCase: GetAllOrdersUseCase;

  const countOrders = 5;
  const OrderRepositoryMock: jest.Mocked<OrderRepository> = { getAll: jest.fn() };

  const mockOrders: Order[] = [
    {
      id: 1,
      orderNumber: 'ORD-001',
      customerName: 'Juan Pérez',
      totalPrice: 150000,
      status: 'Completed',
      createdDate: new Date(),
      itemsCount: 3
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllOrdersUseCase,
        { provide: OrderRepository, useValue: OrderRepositoryMock }
      ]
    })
    .compileComponents();

    useCase = TestBed.inject(GetAllOrdersUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllOrdersUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    OrderRepositoryMock.getAll.mockReturnValue(of(mockOrders));
    const result = await firstValueFrom(useCase.execute(countOrders));
    expect(OrderRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(OrderRepositoryMock.getAll).toHaveBeenCalledWith(countOrders);
    expect(result).toEqual(mockOrders);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de ordenes';
    OrderRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countOrders);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(OrderRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(OrderRepositoryMock.getAll).toHaveBeenCalledWith(countOrders);
  });
});