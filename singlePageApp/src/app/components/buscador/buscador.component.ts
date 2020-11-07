import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  keyword: string;

  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService 
                ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {  
      this.keyword = params['keyword'];
      this.heroes = this._heroesService.buscarHeroes( params['keyword'] );
      console.log(this.heroes);
    });
  }

}
