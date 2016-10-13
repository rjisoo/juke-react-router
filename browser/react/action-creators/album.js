'use strict';

import { RECEIVE_ALBUM } from '../constants';
import { switchLocation } from './location';







// export const receiveAlbums = albums => ({
//   type: RECEIVE_ALBUMS,
//   albums 
// });

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album 
});


