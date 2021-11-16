import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  public videos = [
    {
      title: 'My bathroom need to be renovated',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/FYq6vM1lAEk',
      seen: true,
      posted: '7 hours ago',
      info: 'My bathroom is very old and I want to change all its pipeline so I need a professional plumber',
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
