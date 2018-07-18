import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/medico.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throw';

@Injectable()
export class MedicoService {

  totalMedicos = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  cargarMedicos() {

    const url = URL_SERVICIOS + '/medico';

    return this.http.get( url )
                .map( (resp: any) => {
                  this.totalMedicos = resp.total;
                  return resp.medicos;
                });
  }

  cargarMedico( id: string ) {
    const url = URL_SERVICIOS + '/medico/' + id;

    return this.http.get( url )
                .map( (resp: any) => resp.medico);
  }

  buscarMedicos( termino: string ) {

    const url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.medicos );
  }

  borrarMedico( id: string ) {

    const url = URL_SERVICIOS + '/medico/' + id + '?token=' + this._usuarioService.token;
    return this.http.delete( url )
                .map( (resp: any) => {
                  swal('Medico Borrado', 'Medico borrado correctamente', 'success');
                  return resp.medicos;
                });
  }

  guardarMedico( medico: Medico) {

    let url = URL_SERVICIOS + '/medico';

    if ( medico._id ) {
      // actualizar
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;
      return this.http.put( url, medico)
                  .map( (resp: any) => {
                    swal('Medico Actualizado', medico.nombre, 'success');
                    return resp.medico;
                  });

    } else {
      // Creando
      url += '?token=' + this._usuarioService.token;
        return this.http.post( url, medico )
                .map( (resp: any) => {
                  swal('Medico creado', medico.nombre, 'success');
                  return resp.medico;
                });
    }

  }

}
