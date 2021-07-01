const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

const scaleValues = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

scaleControlValue.value = `${scaleValues.DEFAULT}%`;

const setScale = function (value) {
  scaleControlValue.value = `${value}%`;
  photoPreview.style.transform = `scale(${value / 100})`;
};

const scaleBtnClickHandler = function (point) {
  let currentScale = parseInt(scaleControlValue.value, 10);

  currentScale = currentScale + (scaleValues.STEP * point);

  if (currentScale >= scaleValues.MIN && currentScale <= scaleValues.MAX) {
    setScale(currentScale);
  }
};

scaleControlBigger.addEventListener('click', () => {
  scaleBtnClickHandler(1);
});

scaleControlSmaller.addEventListener('click', () => {
  scaleBtnClickHandler(-1);
});

export { photoPreview };
