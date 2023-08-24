import { Component } from '@angular/core';
import { movie } from './shared/const/movies';
import { Imovie } from './shared/models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movieModels';

  public movieArray : Array<Imovie> = movie;
  public searchByMovie !: string;
}
