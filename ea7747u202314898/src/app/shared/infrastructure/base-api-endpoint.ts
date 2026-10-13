import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BaseAssembler } from './base-assembler';

/**
 * Base class for every endpoint. It holds the HTTP client, the endpoint URL
 * and the assembler, so subclasses only define the operations of their resource.
 *
 * @typeParam TEntity - Domain entity handled by the endpoint.
 * @typeParam TResource - Single item as the API provider sends it.
 * @typeParam TResponse - Whole response envelope as the API provider sends it.
 *
 * @author Mathias Acuache
 */
export abstract class BaseApiEndpoint<TEntity, TResource, TResponse> {

  protected constructor(
    protected readonly http: HttpClient,
    protected readonly endpointUrl: string,
    protected readonly assembler: BaseAssembler<TEntity, TResource, TResponse>
  ) {}

  protected handleError(operation: string) {
    return (error: { statusText?: string; message?: string }): Observable<never> =>
      throwError(() => new Error(`${operation}: ${error.statusText ?? error.message ?? 'Unknown error'}`));
  }
}
