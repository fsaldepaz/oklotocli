import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawListComponent } from './draw-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('okloto-cli');
}
