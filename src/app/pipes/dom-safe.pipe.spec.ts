import { DomSafePipe } from './dom-safe.pipe';

describe('DomSafePipe', () => {
  it('create an instance', () => {
    const pipe = new DomSafePipe();
    expect(pipe).toBeTruthy();
  });
});
