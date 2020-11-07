import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: Heroe;
  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService  
              ) {
    
    this.activatedRoute.params.subscribe( params => { 
      // console.log(params); // Devuelve un objeto
      // console.log(params['id']);  // Devuelve el value del objeto
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });


   }

}
