import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Application store that keeps the active interface language.
 * It is the only place that talks to the translation service when the language changes.
 *
 * @author Mathias Acuache
 */
@Injectable({ providedIn: 'root' })
export class LanguageStore {
  private readonly translateService = inject(TranslateService);

  readonly supportedLanguages: readonly string[] = ['en', 'es'];

  private readonly defaultLanguage = 'en';

  private readonly selectedLanguageState = signal<string>(this.defaultLanguage);

  readonly selectedLanguage = this.selectedLanguageState.asReadonly();

  constructor() {
    this.translateService.use(this.defaultLanguage);
  }

  changeLanguage(language: string): void {
    if (!this.supportedLanguages.includes(language)) return;
    this.selectedLanguageState.set(language);
    this.translateService.use(language);
  }
}
