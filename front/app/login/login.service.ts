import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response  } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl = 'http://localhost/WP-Project1/Api/web/app_dev.php/oauth/v2/token';  // Oauth Login EndPointUrl to web API
  private clientId ='5_5rrdh3r2z5s04ckc4koc4g8c0scskg04okws4s040cowok0o48';
  private clientSecret ='4menft62nwu80g4o0wogg84g4wgc0wcgkgss4c4koo0gcc4wcs';
  constructor(public http: Http) {}

  login(username, password) : Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
     params.set('username', username );
     params.set('password', password );
     params.set('client_id', this.clientId );
     params.set('client_secret', this.clientSecret );
     params.set('grant_type', 'password' );

    return this.http.get(this.OauthLoginEndPointUrl , {
                   search: params
                 }).map(this.handleData)
               .catch(this.handleError);
  }

  private handleData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public logout() {
     localStorage.removeItem('token');
  }
}
