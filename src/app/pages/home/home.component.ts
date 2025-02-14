import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FilmService } from '../../services/filmes.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  result = inject(FilmService);

  destaqueTitle:string="";
  destaqueImg:string ="";


  ngOnInit(): void {
    const cartaz = this.result.getData(environment.urlAPIMoveis);

    cartaz.then((value) => {
      console.log(value.results[0]);

      this.destaqueTitle = value.results[0].title;
      this.destaqueImg = environment.urlLoadImg+value.results[0].poster_path;
    });

  }


}
