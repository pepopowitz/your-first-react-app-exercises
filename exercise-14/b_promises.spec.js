import { takeCareOfKitten, runOutOfBowls, washBowls } from './b_promises';

describe('exercise-14', () => {
  describe('b_promises', () => {
    it('feeds a kitten when we have bowls', (done) => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };
      
      takeCareOfKitten(kitten)
        .then(() => {
          done();
        })
        .catch(() => {
          expect(true).toBe(false);
          done();
        });

    });

    it('errs out when we don`t have bowls', (done) => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      // Test will fail if it doesn't make 1 assertion
      expect.assertions(1);

      takeCareOfKitten(kitten)
        .then(() => {
          done();
        })
        .catch((ex) => {
          expect(ex).toEqual('oh no we are out of bowls!!!');
          done();
        });
    });
  });
});