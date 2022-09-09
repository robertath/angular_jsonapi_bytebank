import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpclient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpclient.post<Transferencia>(this.url, transferencia);
  }

  todas():Observable<Transferencia[]>
  {
    return this.httpclient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
