import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo: string = '';
  private tituloSub$:Subscription;

  constructor( private router: Router) { 
    //console.log('hola breadcrums');

  }

 
  ngOnInit(): void {
    // console.log(this.router.events.subscribe(
    //   events => console.log(events)
    // ));

    //Para destruir la subcripcion..
    //se tiene que referenciar.
    this.tituloSub$ = this.getArgumentoRuta()
        .subscribe( ({titulo}) => {
          this.titulo = titulo;
          document.title = `AdminPro-${titulo}`;
    });
  }

  ngOnDestroy(): void {
    console.log('se destruyo subscripcion.');
      this.tituloSub$.unsubscribe();  
  }

  getArgumentoRuta(){
      // 1ra forma: Funciona
      // this.router.events
      //   .pipe(
      //       filter( events => events instanceof ActivationEnd ),
      //       filter( (events:ActivationEnd) => events.snapshot.firstChild == null),
      //       map( (events:ActivationEnd) => events.snapshot.data)
      //   )
      //   .subscribe( ({titulo}) => {
      //       this.titulo = titulo;
      //   });


      return this.router.events
      .pipe(
          filter( events => events instanceof ActivationEnd ),
          filter( (events:ActivationEnd) => events.snapshot.firstChild == null),
          map( (events:ActivationEnd) => events.snapshot.data)
      )

  }


}