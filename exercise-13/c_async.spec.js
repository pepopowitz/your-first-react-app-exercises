import { takeCareOfKitten, runOutOfBowls, washBowls } from './c_async';

describe('exercise-13', () => {
  describe('c_async', () => {
    it('feeds a kitten when we have bowls', async () => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };

      await takeCareOfKitten(kitten);

      // assertion by the fact that this didn't throw an exception
    });

    it('errs out when we don`t have bowls', async () => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      // Test will fail if 1 assertion isn't made
      expect.assertions(1);

      try {
        await takeCareOfKitten(kitten);
      } catch (ex) {
        expect(ex).toEqual('oh no we are out of bowls!!!');
      }
    });
  });
});
