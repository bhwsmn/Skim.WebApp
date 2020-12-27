import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortenerService } from '../../services/shortener.service';
import { ShortLink } from '../../models/short-link';

@Component({
  selector: 'app-short-url-resolver',
  templateUrl: './short-link-resolver.component.html',
  styleUrls: ['./short-link-resolver.component.css']
})
export class ShortLinkResolverComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private shortenerService: ShortenerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const shortSlug = this.activatedRoute.snapshot.params.shortSlug;
    this.shortenerService.resolveShortUrl(shortSlug).subscribe(
      (shortLink: ShortLink) => {
        window.location.assign(shortLink.longUrl);
      },
      (error) => {
        this.router.navigate(['/']);
      });
  }
}
