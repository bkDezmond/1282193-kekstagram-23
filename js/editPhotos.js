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


const scaleClickHandler = function (sign) {
  const currentScale = parseInt(scaleControlValue.value, 10) + (scaleValues.STEP * sign);

  if (currentScale >= scaleValues.MIN && currentScale <= scaleValues.MAX) {
    scaleControlValue.value = `${currentScale}%`;
    photoPreview.style.transform = `scale(${currentScale / 100})`;
  }
};

scaleControlBigger.addEventListener('click', () => {
  scaleClickHandler(1);
});

scaleControlSmaller.addEventListener('click', () => {
  scaleClickHandler(-1);
});

export { photoPreview };
