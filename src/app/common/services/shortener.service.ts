import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalConstants } from '../constants/global-constants';
import { ShortLink } from '../models/short-link';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  createShortUrl(shortenerInput: ShortLink): Observable<ShortLink> {
    return this.httpClient.post<ShortLink>(GlobalConstants.apiUrl, shortenerInput);
  }

  resolveShortUrl(shortSlug: string): Observable<ShortLink> {
    return this.httpClient.get<ShortLink>(`${GlobalConstants.apiUrl}/${shortSlug}`);
  }
}
