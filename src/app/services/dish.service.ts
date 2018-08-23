import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Restangular } from 'ngx-restangular';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private restangular: Restangular) { }

  getDishes(): Observable<Dish[]> {
    console.log("in getDishes()");
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    console.log('getDish id='+id);
    return  this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    console.log("in getDishIds()");
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

}
