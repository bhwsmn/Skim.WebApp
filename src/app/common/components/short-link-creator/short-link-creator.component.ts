import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../services/shortener.service';
import { GlobalConstants } from '../../constants/global-constants';
import { HttpErrorResponse } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShortLink } from '../../models/short-link';


@Component({
  selector: 'app-short-url-creator',
  templateUrl: './short-link-creator.component.html',
  styleUrls: ['./short-link-creator.component.css']
})
export class ShortLinkCreatorComponent implements OnInit {
  shortLinkForm: FormGroup;
  shortLink: ShortLink;
  fullShortUrl = '';
  responseCode = 0;
  isLoading = false;

  constructor(private shortenerService: ShortenerService) {
  }

  ngOnInit(): void {
    this.shortLinkForm = new FormGroup({
      longUrl: new FormControl(null, [
        Validators.required,
        Validators.pattern(GlobalConstants.urlRegex),
        this.isAppUrlValidator
      ]),
      slug: new FormControl(null, [
        Validators.pattern(GlobalConstants.slugRegex)
      ])
    });
  }

  onDismissErrorAlert(): void {
    this.responseCode = 0;
  }

  onSubmit(): void {
    this.isLoading = true;

    this.shortenerService.createShortUrl(this.shortLinkForm.value).subscribe(
      (shortLink: ShortLink) => {
        this.shortLink = shortLink;
        this.fullShortUrl = `${GlobalConstants.appUrl}/${shortLink.slug}`;
        this.responseCode = 201;
        this.shortLinkForm.reset();
        this.isLoading = false;
      }, (error: HttpErrorResponse) => {
        this.responseCode = error.status;
        this.isLoading = false;
      }
    );
  }

  isAppUrlValidator(control: AbstractControl): { [key: string]: boolean } {
    try {
      const appUrlHost = new URL(GlobalConstants.appUrl).host;
      const longUrlHost = new URL(control.value).host;

      if (appUrlHost === longUrlHost) {
        return {appUrl: true};
      }
    } catch {
      return {appUrl: true};
    }
  }
}
