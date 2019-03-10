import { takeCareOfKitten, runOutOfBowls, washBowls } from './a_callbacks';

describe('exercise-10', () => {
  describe('a_callbacks', () => {
    it('feeds a kitten when we have bowls', done => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };

      expect.assertions(1);

      const err = jest.fn();
      takeCareOfKitten(
        kitten,
        () => {
          // assertion by the fact that this was called
          expect(true).toEqual(true);
          done();
        },
        err
      );
    });

    it('errs out when we don`t have bowls', done => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      // Test will fail if it doesn't make 1 assertion
      expect.assertions(1);

      const err = msg => {
        // assertion by the fact that this was called
        expect(true).toEqual(true);
        done();
      };

      takeCareOfKitten(kitten, () => {}, err);
    });
  });
});
