import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService =  null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('test');
    expect(id.startsWith('test-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids =  new Set();
    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWithPrefix('test'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('test');
    service.generateUniqueIdWithPrefix('test');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should trow when called with empty`, () => {
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`)
      .toThrow();
    });
  });
});