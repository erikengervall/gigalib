import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
} from './change-case';

const inputs = [
  'hello-world',
  'helloWorld',
  'hello_world',
  'hello-world-foo',
  'helloWorldFoo',
  'hello_world-foo',
  'hello-world-foo-123',
  'helloWorldFoo123',
  'hello_world-foo-123-bar',
  'helloWorldFoo123Bar',
  'hello_world-foo-123-bar-baz',
  'helloWorldFoo123BarBaz',
  '123',
  '123_456',
  '123_456_789',
];

const methods = [
  { name: 'camelCase', method: camelCase },
  { name: 'capitalCase', method: capitalCase },
  { name: 'constantCase', method: constantCase },
  { name: 'dotCase', method: dotCase },
  { name: 'kebabCase', method: kebabCase },
  { name: 'pascalCase', method: pascalCase },
  { name: 'pascalSnakeCase', method: pascalSnakeCase },
  { name: 'pathCase', method: pathCase },
  { name: 'sentenceCase', method: sentenceCase },
  { name: 'snakeCase', method: snakeCase },
  { name: 'trainCase', method: trainCase },
];

it.each(methods)('should convert', ({ method, name }) => {
  inputs.forEach((input) => {
    expect(method(input)).toMatchSnapshot(`${input} -> ${name}`);
  });
});
