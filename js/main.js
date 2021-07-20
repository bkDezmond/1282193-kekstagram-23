import { renderErrorTemplate } from './util.js';
import { renderPhotos } from './renderPhotos.js';
import { getData } from './api.js';
import './photoUpload.js';
import './photoScale.js';
import './photoEffects.js';
import './photosFilter.js';

getData(renderPhotos, renderErrorTemplate);
