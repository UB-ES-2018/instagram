import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from './models/profile.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = 'http://urlalbackend.com';
  private urlSufix = '/profiles/';
  get urlToProfile() {
    return this.url + this.urlToProfile;
  }
  constructor(private http: HttpClient) { }

  getProfile(id: string): Observable<Profile> {
    /*
    return this.http.get(this.urlToProfile);
    */
    return of(new Profile());
  }
}
