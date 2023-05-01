/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('VehiculoListComponent', () => {
 let component: VehiculoListComponent;
 let fixture: ComponentFixture<VehiculoListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculoListComponent ],
     providers: [ VehiculoService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculoListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
     const vehiculo = new Vehiculo(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
     );
     component.vehiculos.push(vehiculo);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });


it('should have 1 <div.col-6> table elements', () => {
  expect(debug.queryAll(By.css('div.col-6'))).toHaveSize(1);
});

it('should have 3 <td> elements with the vehicle id', () => {
  debug.queryAll(By.css('td:nth-child(1)')).forEach((td, i) => {
    expect(td.nativeElement.textContent).toContain(component.vehiculos[i].id);
  });
});

it('should have 3 <td> elements with the vehicle brand', () => {
  debug.queryAll(By.css('td:nth-child(2)')).forEach((td, i) => {
    expect(td.nativeElement.textContent).toContain(component.vehiculos[i].marca);
  });
});

it('should have 3 <td> elements with the vehicle line', () => {
  debug.queryAll(By.css('td:nth-child(3)')).forEach((td, i) => {
    expect(td.nativeElement.textContent).toContain(component.vehiculos[i].linea);
  });
});

it('should have 3 <td> elements with the vehicle model', () => {
  debug.queryAll(By.css('td:nth-child(4)')).forEach((td, i) => {
    expect(td.nativeElement.textContent).toContain(component.vehiculos[i].modelo);
  });
});


});
