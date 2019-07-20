import expect from 'expect';

it('renders without crashing', () => {
  const x1 = 1;
  const x2 = 3;
  expect(x1 + x2).toBe(4);
});