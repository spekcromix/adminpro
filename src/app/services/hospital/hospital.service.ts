import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throw';

@Injectable()
export class HospitalService {

  totalRegistros = 0;

  hospital: Hospital;
  token: string;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) {
    this.token = localStorage.getItem('token');
  }

  cargarHospitales() {
    const url = URL_SERVICIOS + '/hospital';

    return this.http.get( url )
                .map( (resp: any) => {
                  this.totalRegistros = resp.total;
                  return resp.hospitales;
                });
  }

  obtenerHospital( id: string ) {
    const url = URL_SERVICIOS + '/hospital/' + id;

    return this.http.get( url )
                .map( (resp: any) => resp.hospital);
  }

  borrarHospital ( id: string ) {
    const url = URL_SERVICIOS + '/hospital/' + id + '?token=' + this._usuarioService.token;

    return this.http.delete( url )
                .map( resp => {
                  swal('Hospital borrado', 'El hospital a sido eliminado correctamente', 'success');
                  return true;
                });
  }

  crearHospital( nombre: string ) {

    const url = URL_SERVICIOS + '/hospital' + '?token=' + this._usuarioService.token;

    return this.http.post( url, { nombre } )
              .map((resp: any) => {
                swal('Hospital creado', nombre, 'success');
      return resp.hospital;
    });

  }

  buscarHospitales( termino: string ) {

    const url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.hospitales );
  }

  actualizarHospital( hospital: Hospital ) {
    const url = URL_SERVICIOS + '/hospital/' + hospital._id + '?token=' + this._usuarioService.token;
    return this.http.put( url, hospital )
                .map( (resp: any) => {
                  swal('Hospital actualizado', hospital.nombre, 'success');

                  return resp.hospital;
                });
  }

}
