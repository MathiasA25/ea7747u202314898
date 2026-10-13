/**
 * Contract for converting API data (resources and responses) into domain entities.
 * It is the only place where API field names are mapped to domain attribute names.
 *
 * @typeParam TEntity - Domain entity produced by the assembler.
 * @typeParam TResource - Single item as the API provider sends it.
 * @typeParam TResponse - Whole response envelope as the API provider sends it.
 *
 * @author Mathias Acuache
 */
export interface BaseAssembler<TEntity, TResource, TResponse> {
  toEntityFromResource(resource: TResource): TEntity;

  toEntitiesFromResponse(response: TResponse): TEntity[];
}
