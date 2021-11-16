import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dashboard-crypto',
  templateUrl: './dashboard-crypto.component.html',
  styleUrls: ['./dashboard-crypto.component.css']
})
export class DashboardCryptoComponent implements OnInit {

  public videos = [
    {
      service: 'De-infestation Treatment',
      provider: 'John Doe',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      rating: 4,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      service: 'De-infestation Treatment',
      provider: 'John Doe',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      rating: 4,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      service: 'De-infestation Treatment',
      provider: 'John Doe',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      rating: 5,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      service: 'De-infestation Treatment',
      provider: 'John Doe',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      rating: 5,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      service: 'De-infestation Treatment',
      provider: 'John Doe',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      rating: 5,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
  ]

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackByFn(index, row) {
    return row.title
  }

}