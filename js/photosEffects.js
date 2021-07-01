import '../nouislider/nouislider.js';
import { photoPreview } from './editPhotos.js';
import { uploadForm } from './uploadOverlay.js';

const effectsInput = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsSlider = document.querySelector('.img-upload__effect-level');
const effectNone = document.getElementById('effect-none');
const effectChrome = document.getElementById('effect-chrome');
const effectSepia = document.getElementById('effect-sepia');
const effectMarvin = document.getElementById('effect-marvin');
const effectPhobos = document.getElementById('effect-phobos');
const effectHeat = document.getElementById('effect-heat');

const effectsLevel = {
  chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    DEFAULT: 1,
    FILTER: 'grayscale',
    UNIT: '',
    NAME: 'effects__preview--sepia',
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    DEFAULT: 1,
    FILTER: 'sepia',
    UNIT: '',
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    DEFAULT: 100,
    FILTER: 'invert',
    UNIT: '%',
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    DEFAULT: 3,
    FILTER: 'blur',
    UNIT: 'px',
  },
  heat: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    DEFAULT: 3,
    FILTER: 'brightness',
    UNIT: '',
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

const removeAllClasses = (element, except = []) => {
  const classList = element.classList;
  for (let i = 0; i < classList.length; i++) {
    if (!except.includes(classList[i])) {
      classList.remove(classList[i]);
    }
  }
};

const sliderNotHidden = () => {
  effectsSlider.classList.remove('visually-hidden');
};

const setEffects = () => {
  uploadForm.addEventListener('click', () => {
    const effectsRadio = document.querySelector('input[name=effect]:checked').id;
    removeAllClasses(photoPreview, ['img-upload__preview']);
    if (effectsRadio === 'effect-none') {
      photoPreview.classList.add('effects__preview--none');
      effectsSlider.classList.add('visually-hidden');
    }
    if (effectsRadio === 'effect-chrome') {
      sliderNotHidden();
      photoPreview.classList.add('effects__preview--chrome');
    }
    if (effectsRadio === 'effect-sepia') {
      photoPreview.classList.add('effects__preview--sepia');
    }
    if (effectsRadio === 'effect-marvin') {
      photoPreview.classList.add('effects__preview--marvin');
    }
    if (effectsRadio === 'effect-phobos') {
      photoPreview.classList.add('effects__preview--phobos');
    }
    if (effectsRadio === 'effect-heat') {
      photoPreview.classList.add('effects__preview--heat');
    }
  });
};

effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectsInput.value = unencoded[handle];
  const effectValue = unencoded[handle];
  const checkedEffect = document.querySelector('input[name=effect]:checked').value;
  setEffects();
  if (checkedEffect === 'none') {
    return;
  }
  photoPreview.style.filter = `${effectsLevel[checkedEffect].FILTER}(${effectValue + effectsLevel[checkedEffect].UNIT || ''})`;
});

effectNone.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    photoPreview.style.filter = 'none';
  }
});

effectChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsLevel.chrome.MIN,
        max: effectsLevel.chrome.MAX,
      },
      start: effectsLevel.chrome.DEFAULT,
      step: effectsLevel.chrome.STEP,
    });
  }
});

effectSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsLevel.sepia.MIN,
        max: effectsLevel.sepia.MAX,
      },
      start: effectsLevel.sepia.DEFAULT,
      step: effectsLevel.sepia.STEP,
    });
  }
});

effectMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsLevel.marvin.MIN,
        max: effectsLevel.marvin.MAX,
      },
      start: effectsLevel.marvin.DEFAULT,
      step: effectsLevel.marvin.STEP,
    });
  }
});

effectPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsLevel.phobos.MIN,
        max: effectsLevel.phobos.MAX,
      },
      start: effectsLevel.phobos.DEFAULT,
      step: effectsLevel.phobos.STEP,
    });
  }
});

effectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsLevel.heat.MIN,
        max: effectsLevel.heat.MAX,
      },
      start: effectsLevel.heat.DEFAULT,
      step: effectsLevel.heat.STEP,
    });
  }
});
