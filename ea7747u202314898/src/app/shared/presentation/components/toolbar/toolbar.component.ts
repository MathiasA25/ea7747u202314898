import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

/**
 * Application toolbar: CERN logo and title, navigation options and language switcher.
 *
 * @author Mathias Acuache
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  protected readonly logoUrl = `${environment.logoApiUrl}?token=${environment.logoApiToken}`;

  protected readonly navigationOptions = [
    { path: '/home', labelKey: 'toolbar-home' },
    { path: '/research/items/new', labelKey: 'toolbar-new-research-item' }
  ];
}
