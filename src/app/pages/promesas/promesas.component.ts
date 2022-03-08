import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      //Este Ejemplo es Asincrono asi como esta.  
      //en este ejemplo muestra la promesa sincronamente.
      // const promesa = new Promise( () => {
      //     console.log('hola mundo');
      // });
      // console.log('Fin del Init');

      //Este ejemplo lo convierte enb una Asincrona.
      // const promesa = new Promise( (resolve, reject ) => {
      //     if(false){
      //       resolve('hola mundo');
      //     }else{
      //       reject('AAAlgo salio mal');
      //     }
      // });
      // promesa.then( (mensaje)=>{
      //   console.log(mensaje)
      // })
      // .catch(error => console.log('Error en el ejemplo', error));
      // console.log('Fin del Init');


      //Otro ejemplo: FUNCIONES que devuelven Promesas  FETCH API
      //1ra forma de obtener usuarios.
      this.getUsuarios(); 
      console.log('Fin del Init: getusuarios()');


      //2da forma de obtener usuarios.
      //this.getUsuarios2( usuarios => {   //No es la forma correcta.
      //     console.log(usuarios);         //a continuacion esta la forma correcta
      //}); 
      this.getUsuarios2().then( usuarios => console.log(usuarios)); 
      console.log('Fin del Init: getusuarios2');   

      //3ra forma  
      this.getUsuarios3()
            .then( usuarios => { 
                console.log(usuarios);
                console.log('Fin del Init: getusuarios3');          
            });
    
  }  

  
  //1ra forma.
  //Otro ejemplo: FUNCIONES que devuelven Promesas  FETCH API
  getUsuarios(){
      fetch('https://reqres.in/api/users')
      //.then( resp => console.log('tengo data'));  //1) funciona
      //.then( resp => console.log(resp))  //2) devuelve un readableString, se tiene q conver a JSON.
      //.then( resp => {resp.json().then(body => console.log(body.data)) });  //3) forma compleja. retorn body.data
      .then (resp => resp.json())  //devuelve una promesa
      .then (body => console.log(body.data))
  }

  //2da forma.
  //Otro ejemplo: FUNCIONES que devuelven Promesas  FETCH API
  getUsuarios2(){
    const promesa = new Promise((resolve)=>{
      fetch('https://reqres.in/api/users')
      .then (resp => resp.json())  //devuelve una promesa
      .then (body => resolve(body.data));
     
    });
    return promesa;
  }

  //3ra forma
  getUsuarios3(){
    const promesa = new Promise((resolve)=>{
      fetch('https://reqres.in/api/users')
      .then (resp => resp.json())  //devuelve una promesa
      .then (body => resolve(body.data));
     
    });
    return promesa;
  }

}
