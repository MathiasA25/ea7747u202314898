import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * View shown when the requested navigation path is not supported.
 * It displays the path that was not found and a button to return to Home.
 *
 * @author Mathias Acauche
 */
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatButtonModule, RouterLink, TranslatePipe],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  private readonly router = inject(Router);
  protected readonly requestedPath = this.router.url;
}
