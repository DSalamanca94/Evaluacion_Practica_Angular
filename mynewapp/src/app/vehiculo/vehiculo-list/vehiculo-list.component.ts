import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  vehiculosPorMarca: Array<{ marca: string, cantidad: number }> = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.vehiculosPorMarca = this.countVehiculosPorMarca(vehiculos);
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
  countVehiculosPorMarca(vehiculos: Array<Vehiculo>): Array<{ marca: string, cantidad: number }> {
    const vehiculosPorMarca = new Map<string, number>();
    vehiculos.forEach(vehiculo => {
      const marca = vehiculo.marca;
      const cantidadActual = vehiculosPorMarca.get(marca) ?? 0;
      vehiculosPorMarca.set(marca, cantidadActual + 1);
    });
    return Array.from(vehiculosPorMarca).map(([marca, cantidad]) => ({ marca, cantidad }));
  }
}
