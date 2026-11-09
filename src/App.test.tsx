import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  class IO {
    readonly root: Element | null = null;
    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb;
    }
    cb: IntersectionObserverCallback;
    observe(el: Element) {
      this.cb(
        [
          {
            isIntersecting: true,
            target: el,
            intersectionRatio: 1,
          } as IntersectionObserverEntry,
        ],
        this as unknown as IntersectionObserver
      );
    }
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  class RO {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-ignore
  global.IntersectionObserver = IO;
  // @ts-ignore
  global.ResizeObserver = RO;
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    value: 800,
  });
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    value: 400,
  });
  window.scrollTo = () => {};
});

test('affiche Solidari sans erreur', () => {
  const { getAllByText } = render(<App />);
  expect(getAllByText(/Solidari/i).length).toBeGreaterThan(0);
});
