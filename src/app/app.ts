import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawListComponent } from './draw-list.component';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('okloto-cli');
}
