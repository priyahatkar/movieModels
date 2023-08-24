import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../models/movie';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(value: Imovie [], findString: string): Imovie [] {
    if(!findString){
      return value;
    }

    if(!value){
      return [];
    } 
    
    let movieArray = value.filter(movie =>{
      return movie.title.toLowerCase().includes(findString.toLowerCase())
    })
  return movieArray
}

}
