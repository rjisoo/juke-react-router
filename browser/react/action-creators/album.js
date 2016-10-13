'use strict';

import { RECEIVE_ALBUM } from '../constants';
import { switchLocation } from './location';

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album 
});


