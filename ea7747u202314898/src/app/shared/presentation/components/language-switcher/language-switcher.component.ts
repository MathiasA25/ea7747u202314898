import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageStore } from '../../../application/language-store';

/**
 * Select buttons that switch the interface language between English and Spanish.
 * The language state lives in {@link LanguageStore}; this component only renders it.
 *
 * @author Mathias Acuache
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatButtonToggleModule, TranslatePipe],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  protected readonly languageStore = inject(LanguageStore);
}
