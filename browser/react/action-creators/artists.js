'use strict';

import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants';
import { switchLocation } from './location';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = (artist, songs, albums) => ({
  type: RECEIVE_ARTIST,
  artist,
  songs,
  albums
});

export const fetchAndGoToArtist = artist =>
  dispatch => {
    let artistId = `/api/artists/${artist.id}`,
        songs = `${artistId}/songs`,
        albums = `${artistId}/albums`;

    Promise
      .all([fetch(artistId), fetch(songs), fetch(albums)])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(results => {
        dispatch(receiveArtist(...results));
        dispatch(switchLocation('artist'));
      });
  };

export const fetchArtistById = artistId =>
  dispatch => {
    let artists = `/api/artists/${artistId}`,
        songs = `/api/artists/${artistId}/songs`,
        albums = `/api/artists/${artistId}/albums`;

    Promise
      .all([fetch(artists), fetch(songs), fetch(albums)])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(results => {
        dispatch(receiveArtist(...results)); // What does ... do?
      });
  };
