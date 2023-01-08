// import { Perfume PerfumeItem } from './../models/ PerfumeItem';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class  PerfumeItemService {

//   constructor(private http: HttpClient) { }
//   get PerfumeItems():Observable <Perfume PerfumeItem[]>{
//     return this.http.get<Perfume PerfumeItem[]>('http://localhost:8000/api/ PerfumeItems/');

//   }
//   insert PerfumeItem( PerfumeItem:Perfume PerfumeItem): Observable<Perfume PerfumeItem> {
//     	const headers = { 'content-type': 'application/json'} 
//     //	console.log(JSON.stringify( PerfumeItem))						
//       return this.http.post<Perfume PerfumeItem>('http://localhost:8000/api/insert/',  PerfumeItem, {'headers':headers});
//   }

  import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfumeItem} from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class  PerfumeItemService {

  constructor(private http: HttpClient) { }

  getItem():Observable < PerfumeItem[]>{
    return this.http.get< PerfumeItem[]>('http://localhost:3500/api/item');
  }

  deleteItem(id:any):Observable < PerfumeItem[]>{
    return this.http.delete< PerfumeItem[]>(`http://localhost:3500/api/item/${id}`);
  }

  insertItem( PerfumeItem: PerfumeItem): Observable< PerfumeItem> {
    	const headers = { 'content-type': 'application/json'}
    	console.log(JSON.stringify( PerfumeItem))
      return this.http.post< PerfumeItem>('http://localhost:3500/api/item/',  PerfumeItem, {'headers':headers});
  }

  updateItem( PerfumeItem: PerfumeItem , id:any): Observable< PerfumeItem> {
    const headers = { 'content-type': 'application/json'}
    console.log(JSON.stringify( PerfumeItem))
    return this.http.put< PerfumeItem>(`http://localhost:3500/api/item/${id}`,  PerfumeItem, {'headers':headers});
}



}

