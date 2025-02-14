import { Component, Input } from '@angular/core';
import { NavegationComponent } from "../navegation/navegation.component";

@Component({
  selector: 'app-header',
  imports: [NavegationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title = 'teste';


}
