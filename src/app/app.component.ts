import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { TicTacToeComponent} from './tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPro';
  constructor() {
    console.log('AppComponent constructor');
  }
}
