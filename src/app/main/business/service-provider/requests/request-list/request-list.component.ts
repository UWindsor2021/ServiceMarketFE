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
      title: 'Mold problem in my basement!',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '2 hours ago',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'My house need to be painted',
      category: 'Paint',
      url: 'https://www.youtube.com/watch?v=nP2vtDLTAgM',
      seen: true,
      posted: '4 hours ago',
      info: ' I need to paint all my house. I am searching for a painter who can paint my house with reasonable price.',
    },
    {
      title: 'I need a car for rent',
      category: 'Vehicle rent',
      url: 'https://www.youtube.com/watch?v=ltnwCB8fgnU',
      seen: true,
      posted: '2 hours ago',
      info: 'I want to rent a car for 2 days',
    },
    {
      title: 'My bathroom need to be renovated',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '1 hours ago',
      info: 'My bathroom is very old and I want to change all its pipeline so I need a professional plumber',
    },
    {
      title: 'Mold problem in my basement!',
      category: 'De-infestation Treatment',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      posted: '5 hours ago',
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
