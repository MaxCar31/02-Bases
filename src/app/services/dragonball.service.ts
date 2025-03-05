import { Injectable } from '@angular/core';

//Un servicio no es mas que una clase corriente
//como si fuera un singleton, es decir vamos a tener la misma instancia

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }

}
