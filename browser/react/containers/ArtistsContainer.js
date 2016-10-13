'use strict';

import { connect } from 'react-redux';
import Artists from '../components/Artists';
import { fetchAndGoToArtist } from '../action-creators/artists';

const mapStateToProps = ({ artists }) => ({
  artists
});

const mapDispatchToProps = dispatch => ({
  go: artist => dispatch(fetchAndGoToArtist(artist))
});

// exporting connect, which renders Artists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artists);