import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Hospital } from '../../models/hospital.model';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  totalRegistros = 0;

  hospitales: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion
        .subscribe( () => this.cargarHospitales() );
  }

  cargarHospitales() {
    this._hospitalService.cargarHospitales()
        .subscribe( (hospitales: any) => this.hospitales = hospitales);
  }

  buscarHospital ( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospitales( termino )
        .subscribe( (hospitales: Hospital[]) => this.hospitales = hospitales );
  }

  guardarHospital( hospital: Hospital ) {
    this._hospitalService.actualizarHospital( hospital )
        .subscribe();
  }

  borrarHospital( hospital: Hospital ) {

    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {

      if (borrar) {

        this._hospitalService.borrarHospital( hospital._id)
            .subscribe( borrado => {
              console.log( borrado );
              this.cargarHospitales();
            });

      }
    });
  }

  crearHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      buttons: true,
      dangerMode: true
    }).then( (valor: string) => {
      if( !valor || valor.length === 0 ) {
        return;
      }

      this._hospitalService.crearHospital( valor )
          .subscribe( () => this.cargarHospitales());
    });
  }

  actualizarImagen( hospital: Hospital ){
    this._modalUploadService.mostrarModal( 'hospitales', hospital._id );
  }

}
