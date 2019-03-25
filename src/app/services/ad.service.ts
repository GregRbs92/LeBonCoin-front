import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ad } from '../interface/Ad';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  getAds() {
    return this.http.get<Ad[]>(`${environment.api}/ads`);
  }

  getAd(id: number) {
    return this.http.get<Ad>(`${environment.api}/ads/${id}`);
  }

  createAd(body: any) {
    return this.http.post<Ad>(`${environment.api}/ads`, body);
  }

  updateAd(id: number, body: any) {
    return this.http.put<Ad>(`${environment.api}/ads/${id}`, body);
  }

  deleteAd(id: number) {
    return this.http.delete(`${environment.api}/ads/${id}`)
    .pipe(
      switchMap(() => {
        return this.getAds();
      })
    );
  }
}
