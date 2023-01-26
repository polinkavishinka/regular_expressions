import Validator from '../regular';

test('Тест Ника', () => {
  const received = Validator.validateUsername('polly');
  expect(received).toBeTruthy();
});

test('Ник из заглавных букв', () => {
  const received = Validator.validateUsername('POLLY');
  expect(received).toBeTruthy();
});

test('Ник из цифр', () => {
  const received = Validator.validateUsername('P254ly');
  expect(received).toBeTruthy();
});

test('Ник с нижнем подчеркиванием', () => {
  const received = Validator.validateUsername('p_olly');
  expect(received).toBeTruthy();
});

test('Ник с тире', () => {
  const received = Validator.validateUsername('po-lly');
  expect(received).toBeTruthy();
});

test('Ник начинается с нижнего подчеркивания', () => {
  const received = Validator.validateUsername('_polly');
  expect(received).toBeFalsy();
});

test('Ник начинается с тире', () => {
  const received = Validator.validateUsername('-polly');
  expect(received).toBeFalsy();
});

test('Ник заканчивается тире', () => {
  const received = Validator.validateUsername('polly-');
  expect(received).toBeFalsy();
});

test('Ник больше 3 цифр подряд', () => {
  const received = Validator.validateUsername('po5555lly');
  expect(received).toBeFalsy();
});

test('Тест ника если содержит только 1 букву в имени', () => {
  const received = Validator.validateUsername('Ф');
  expect(received).toBeFalsy();
});

test('Тест ника если содержит только 1 цифру в имени', () => {
  const received = Validator.validateUsername('1');
  expect(received).toBeFalsy();
});