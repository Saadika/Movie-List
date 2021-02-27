import { Component, OnInit } from '@angular/core';
import { ApiSharedService } from '../services/api-shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movieList: string[];
  public searchMovie: string;
  public defaultMovie: string = "Batman";
  public showLoader: boolean = false;

  constructor(
    private _apiSharedService: ApiSharedService,
    ) {}

  ngOnInit() {
    
    this.loadData(this.defaultMovie)
  }

  loadData(search: string) {
    this.showLoader = true;
    this._apiSharedService.getMovieList(search).subscribe(list => {
      this.movieList = list.Search;
      this.showLoader = false;
    }), (error) => {
      console.log(error)
    };
  }

  submitInput() {
    this.loadData(this.searchMovie);
  }
}
