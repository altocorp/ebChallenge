import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faFileAlt, faPhone, faNetworkWired, faDesktop} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  iconBars = faBars
  iconHome = faHome
  iconAbout = faFileAlt
  iconContact = faPhone
  iconBlog = faNetworkWired
  iconCareers = faDesktop

  constructor() { }

  ngOnInit(): void {
  }

}
