import { naiveDeepclone } from './naive-deepclone';

describe('handle mutations within the nestled structure', () => {
  it('expected outcome if not deepclone', () => {
    const myObj = {
      some: {
        nestled: {
          value: 1337,
        },
      },
    };

    const naiveClone = { ...myObj };
    myObj.some.nestled = '1337' as never;

    expect(naiveClone.some).toMatchSnapshot();
  });

  it('should deepclone objects, modifying values are not propagated', () => {
    const myObj = {
      some: {
        nestled: {
          value: 1337,
        },
      },
    };

    const naiveClone = naiveDeepclone(myObj);

    myObj.some = '1337' as never;

    expect(naiveClone.some).toMatchSnapshot();
  });
});
