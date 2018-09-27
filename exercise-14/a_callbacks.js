// vvvvv
export function takeCareOfKitten(kitten, done, err) {
  callKitten(kitten, () => {
    petKitten(kitten, () => {
      getBowlForKitten(kitten, () => {
        feedKitten(kitten, () => {
          done();
        }, err);
      }, err);
    }, err);
  }, err);
}
// ^^^^^

function callKitten(kitten, done, err) {
  console.log('start: calling kitten');
  doSlowAction(() => {
    console.log('end: calling kitten');
    done();
  });
}

function petKitten(kitten, done, err) {
  console.log('start: petting kitten');
  doSlowAction(() => {
    console.log('end: petting kitten');
    done();
  });
}

function getBowlForKitten(kitten, done, err) {
  console.log('start: getting bowl for kitten');
  doSlowAction(() => {
    if (bowlsRemaining > 0) {
      console.log('end: getting bowl for kitten');
      done();
    } else 
    {
      console.error('oh no we are out of bowls!!!')
      err('oh no we are out of bowls!!!');
    }
  });
}

function feedKitten(kitten, done, err) {
  console.log('start: feeding kitten');
  doSlowAction(() => {
    console.log('end: feeding kitten');
    done();
  });
}

let bowlsRemaining = 1;
export function washBowls() {
  bowlsRemaining = 3;
}

export function runOutOfBowls() {
  bowlsRemaining = 0;
}

function doSlowAction(action) {
  setTimeout(() => {
    action()
  }, 10);
}