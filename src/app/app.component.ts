import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faGithub = faGithub;
  faExternalLink = faExternalLink;
  title = 'angular-desperado';
  menuVisible = true;
  toggleMenu(){
    this.menuVisible = !this.menuVisible
  }
}
