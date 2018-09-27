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

      takeCareOfKitten(kitten)
        .then(() => {
          expect(true).toBe(false);
          done();
        })
        .catch(() => {
          expect(true).toBe(true);
          done();
        });
    });
  });
});