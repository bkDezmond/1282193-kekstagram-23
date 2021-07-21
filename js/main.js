import { renderErrorTemplate } from './util.js';
import { renderPhotos } from './render-photos.js';
import { getData } from './api.js';
import './photo-upload.js';
import './photo-scale.js';
import './photo-effects.js';
import './photos-filter.js';

getData(renderPhotos, renderErrorTemplate);
