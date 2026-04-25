import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsPage } from './reviews.page';
import { GetAllReviewsUseCase } from '../../../core/application/usecases/get-all-reviews.usecase';
import { REVIEWS_MOCKS } from '../../../mocks/reviews.mocks';
import { of, throwError } from 'rxjs';

describe('ReviewsPage', () => {
  let component: ReviewsPage;
  let fixture: ComponentFixture<ReviewsPage>;
  let getAllReviewsUseCase: jest.Mocked<GetAllReviewsUseCase>;

  beforeEach(async () => {
    const getAllReviewsUseCaseMock: jest.Mocked<GetAllReviewsUseCase> = {
      execute: jest.fn()
    } as any;

    await TestBed.configureTestingModule({
      imports: [ReviewsPage],
      providers: [
        { provide: GetAllReviewsUseCase, useValue: getAllReviewsUseCaseMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPage);
    component = fixture.componentInstance;
    getAllReviewsUseCase = TestBed.inject(GetAllReviewsUseCase) as jest.Mocked<GetAllReviewsUseCase>;
  });

  it('debería ser creado correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar con estado "init" y array vacío', () => {
    expect(component.state).toBe('init');
    expect(component.reviews).toEqual([]);
  });

  it('debería cambiar a estado "loading" al iniciar', () => {
    getAllReviewsUseCase.execute.mockReturnValue(of(REVIEWS_MOCKS));
    component.ngOnInit();
    
    expect(component.state).toBe('loading');
  });

  it('debería cargar las reseñas exitosamente', (done) => {
    getAllReviewsUseCase.execute.mockReturnValue(of(REVIEWS_MOCKS));
    component.ngOnInit();

    setTimeout(() => {
      expect(component.reviews).toEqual(REVIEWS_MOCKS);
      expect(component.state).toBe('success');
      done();
    }, 100);
  });

  it('debería cambiar a estado "error" cuando el caso de uso falle', (done) => {
    getAllReviewsUseCase.execute.mockReturnValue(throwError(() => new Error('Error')));
    component.ngOnInit();

    setTimeout(() => {
      expect(component.state).toBe('error');
      done();
    }, 100);
  });
});
