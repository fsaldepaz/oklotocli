import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { DrawService } from './draw.service';

@Component({
  selector: 'app-draw-list',
  template: `
    <main class="container">
      <h1>Lotto Draws</h1>

      @if (drawsResource.isLoading()) {
        <p role="status">Loading draws...</p>
      } @else if (drawsResource.error()) {
        <p role="alert">Error: Unable to fetch draws. Please try again.</p>
      } @else {
        <ul class="draw-list" aria-label="Lotto draw results">
          @for (draw of drawsResource.value(); track draw.name + draw.date) {
            <li class="draw-card">
              <article>
                <div class="draw-header">
                  <h2 class="draw-name">{{ draw.name }}</h2>
                  <time [attr.datetime]="draw.date" class="draw-date">{{ draw.date }}</time>
                </div>
                <div class="draw-content">
                  <span class="sr-only">Winning numbers:</span>
                  <p class="numbers-display">{{ draw.numbers }}</p>
                </div>
              </article>
            </li>
          } @empty {
            <li>No draws available.</li>
          }
        </ul>
      }
    </main>
  `,
  styles: `
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
      font-family: system-ui, -apple-system, sans-serif;
    }

    h1 {
      color: #333;
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .draw-list {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 1rem;
    }

    .draw-card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .draw-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .draw-name {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .draw-date {
      font-size: 0.875rem;
      color: #666;
    }

    .numbers-display {
      margin: 0;
      padding: 0.5rem;
      background: #f5f5f5;
      border-radius: 4px;
      font-family: monospace;
      font-size: 1.2rem;
      letter-spacing: 1px;
      color: #d32f2f;
      text-align: center;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawListComponent {
  private readonly drawService = inject(DrawService);
  readonly drawsResource = rxResource({
    loader: () => this.drawService.getDraws(),
  });
}