import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.css']
})
export class BannerPrincipalComponent  {

  nombrePersona:string="Daniel"
  edad:number=19
  resultado:string=""
  gustos:Array<string>=["Correr","Viajar","Cocinar","Cine"]
  mostarInformacionSentimental:boolean=true
  cambiarEstadoInformacionSentimental(){
    //true==>false
    //false==>true
    this.mostarInformacionSentimental=!this.mostarInformacionSentimental
  }
  verifacionEdad(){
    if(this.edad>=18){
      this.resultado="Mayor de edad"
    }
    else{
      this.resultado="Menor de edad"
    }
  }
  cambiarNombre(){
    this.nombrePersona="Julio"
  }
}
