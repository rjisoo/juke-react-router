'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchArtistById } from '../action-creators/artists'
import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetchArtistById: artistId => dispatch(fetchArtistById(artistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

