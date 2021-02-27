import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieList } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiSharedService {

  constructor(private http: HttpClient) { }

  private url ='http://omdbapi.com/?i=tt3896198&apikey=d446712a&s=';

  getMovieList(searchString: string): Observable<MovieList> {
    return this.http.get<MovieList>(this.url + searchString)
    .pipe(map((response: MovieList) => response))
  }
}
