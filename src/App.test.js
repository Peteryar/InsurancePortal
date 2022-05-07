import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Header Component', () => {
  let getByTestId;
  let header;
  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    header = getByTestId('header');
  });
  afterEach(() => {
    cleanup();
  });
  it('should render two elements', () => {
    expect(header.children.length).toBe(2);
  });
  it('should render three li elements as nav-items', () => {
    expect(header.children[0].children.length).toBe(3);
  });
});

describe('Sidebar Component', () => {
  let getByTestId;
  let sidebar;
  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    sidebar = getByTestId('sidebar');
  });
  afterEach(() => {
    cleanup();
  });
  it('should render two divs', () => {
    expect(sidebar.children.length).toBe(2);
  });
});

describe('Main Component', () => {
  let getByTestId;
  let main;
  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    main = getByTestId('main');
  });
  afterEach(() => {
    cleanup();
  });

  it('should render two divs', () => {
    expect(main.children.length).toBe(2);
  });
});

describe('Dashboard Component', () => {
  let getByTestId;
  let dashboard;
  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    dashboard = getByTestId('dashboard');
  });
  afterEach(() => {
    cleanup();
  });

  it('should render two elements', () => {
    expect(dashboard.children.length).toBe(2);
  });
  it('should render two elements at the right hand side', () => {
    expect(dashboard.children[1].children.length).toBe(2);
  });
});
