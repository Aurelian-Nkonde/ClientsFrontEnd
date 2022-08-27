import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsClientComponent } from './lists-client.component';

describe('ListsClientComponent', () => {
  let component: ListsClientComponent;
  let fixture: ComponentFixture<ListsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
