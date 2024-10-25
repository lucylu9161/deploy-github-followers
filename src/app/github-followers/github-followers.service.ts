import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';
// import { AppError } from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { BadInput } from '../common/bad-input';

@Injectable()
export class GithubFollowersService {
  private readonly _url =
    'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {}

  getFollowers() {
    //return null;
    return this.http.get(this._url);
  }
}
