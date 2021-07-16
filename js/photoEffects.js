// okay
import './nouislider.js';

const effectsInput = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsSlider = document.querySelector('.img-upload__effect-level');
const imgUploadEffects = document.querySelector('.img-upload__effects');
const FILTER_CLASS_NAMES = ['effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'];
const photoPreview = document.querySelector('.img-upload__preview');

const effectsDescription = {
  none: {
    min: 0,
    max: 1,
    step: 0.1,
    default: 1,
    filter: 'none',
    unit: '',
    className: 'effects__preview--none',
  },
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
    default: 1,
    filter: 'grayscale',
    unit: '',
    className: 'effects__preview--chrome',
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    default: 1,
    filter: 'sepia',
    unit: '',
    className: 'effects__preview--sepia',
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
    default: 100,
    filter: 'invert',
    unit: '%',
    className: 'effects__preview--marvin',
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
    default: 3,
    filter: 'blur',
    unit: 'px',
    className: 'effects__preview--phobos',
  },
  heat: {
    min: 0,
    max: 3,
    step: 0.1,
    default: 3,
    filter: 'brightness',
    unit: '',
    className: 'effects__preview--heat',
  },
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
  connect: 'lower',
});

const showSlider = () => {
  effectsSlider.classList.remove('visually-hidden');
};

const hideSlider = () => {
  effectsSlider.classList.add('visually-hidden');
};

const clearEffects = () => {
  photoPreview.classList.remove(...FILTER_CLASS_NAMES);
  photoPreview.classList.add('effects__preview--none');
  photoPreview.style.filter = 'none';
  hideSlider();
};

imgUploadEffects.addEventListener('click', (evt) => {
  const effectsRadio = evt.target.value;
  if (!effectsRadio) {
    return;
  }
  const effectDescription = effectsDescription[effectsRadio];
  photoPreview.classList.remove(...FILTER_CLASS_NAMES);
  photoPreview.classList.add(effectsDescription[effectsRadio].className);
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: effectDescription.min,
      max: effectDescription.max,
    },
    start: effectDescription.default,
    step: effectDescription.step,
  });
  if (effectsRadio === 'none') {
    hideSlider();
  }
  else {
    showSlider();
  }
});

effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectsInput.value = unencoded[handle];
  const effectValue = unencoded[handle];
  const checkedEffect = document.querySelector('input[name=effect]:checked').value;
  if (checkedEffect === 'none') {
    photoPreview.style.filter = 'none';
  }
  else {
    photoPreview.style.filter = `${effectsDescription[checkedEffect].filter}(${effectValue + effectsDescription[checkedEffect].unit})`;
  }
});

export { clearEffects };
