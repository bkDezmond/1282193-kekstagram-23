// okay
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

const scaleValues = {
  min: 25,
  max: 100,
  step: 25,
  default: 100,
};

const setScale = (currentScale) => {
  scaleControlValue.value = `${currentScale}%`;
  photoPreview.style.transform = `scale(${currentScale / 100})`;
};

const scaleHandler = function (sign) {
  const currentScale = parseInt(scaleControlValue.value, 10) + (scaleValues.step * sign);

  if (currentScale >= scaleValues.min && currentScale <= scaleValues.max) {
    setScale(currentScale);
  }
};

const clearScale = () => {
  setScale(scaleValues.default);
};

scaleControlBigger.addEventListener('click', () => {
  scaleHandler(1);
});

scaleControlSmaller.addEventListener('click', () => {
  scaleHandler(-1);
});

export { clearScale };
