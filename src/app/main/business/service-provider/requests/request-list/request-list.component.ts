import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import * as moment from 'moment'

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  public videos = [
    {
      title: 'Mold problem in my basement!',
      category: 'De-infestation Treatment',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      location: '42.30401652637586,-83.0738203528894',
      posted: moment('Thu Nov 25 2021 19:20:03 GMT+0300').fromNow(),
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'My house need to be painted',
      category: 'Paint',
      url: 'https://www.youtube.com/embed/nP2vtDLTAgM',
      seen: true,
      location: '42.30489400178442,-83.07470747139065',
      posted: moment('Thu Nov 25 2021 11:20:03 GMT+0300').fromNow(),
      info: ' I need to paint all my house. I am searching for a painter who can paint my house with reasonable price.',
    },
    {
      title: 'My bathroom need to be renovated',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/FYq6vM1lAEk',
      seen: true,
      location: '42.3046645713217,-83.07344482419869',
      posted: moment('Thu Nov 23 2021 13:20:03 GMT+0300').fromNow(),
      info: 'My bathroom is very old and I want to change all its pipeline so I need a professional plumber',
    },
    {
      title: 'I need a car for rent',
      category: 'Vehicle rent',
      url: 'https://www.youtube.com/embed/G6LigiflRzw',
      seen: true,
      location: '42.30466859642476,-83.07361353998726',
      posted: moment('Thu Nov 20 2021 21:05:43 GMT+0300').fromNow(),
      info: 'I want to rent a car for 2 days',
    },
    {
      title: 'Mold problem in my basement!',
      category: 'Plumbing',
      url: 'https://www.youtube.com/embed/N7EcNIBlW64',
      seen: true,
      location: '42.304001882853974,-83.074066335847',
      posted: moment('Thu Oct 25 2021 17:30:03 GMT+0300').fromNow(),
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
  ]

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getMapParams(videos: Array<any>) {
    return '?l=' + videos.map(p => p.location + "," + p.title).join('|');
  }

  getUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackByFn(index, row) {
    return row.title
  }

}
