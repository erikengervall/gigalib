import { fileName } from './file-name';

it('should return file name withExt and withoutExt', () => {
  expect(fileName('test.txt')).toMatchSnapshot();
  expect(fileName('a/b/c/test.txt')).toMatchSnapshot();
  expect(fileName('/a/b/c/test.txt')).toMatchSnapshot();
  expect(fileName('test')).toMatchSnapshot();
});
