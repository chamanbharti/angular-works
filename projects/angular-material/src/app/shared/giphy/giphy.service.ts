import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// http://tutorials.pluralsight.com/front-end-javascript/getting-started-with-angular-2-by-building-a-giphy-search-application
export class GiphyService {

  // Public beta key: https://github.com/Giphy/GiphyAPI#public-beta-key
  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';

  constructor(public http: HttpClient) { }

  get(searchTerm){
    const apiLink = this.giphyApi + searchTerm;
    return this.http.get(apiLink)
    .pipe(
      map(
        (res: any)=>{
          if(res.data.length > 0){
            return res.data[0].images.original.url;
          }else{
            return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
          }
        }
      )
    );
  }
}
