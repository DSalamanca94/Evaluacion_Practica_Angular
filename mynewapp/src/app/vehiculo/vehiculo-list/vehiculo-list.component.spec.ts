/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('BookListComponent', () => {
 let component: VehiculoListComponent;
 let fixture: ComponentFixture<VehiculoListComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculoListComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculoListComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
