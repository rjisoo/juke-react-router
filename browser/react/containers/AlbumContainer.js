'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import {fetchAlbumById} from '../action-creators/albums'

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});


const mapDispatchToProps = (dispatch) => {
	return {
		getTheAlbum: (albumId) => dispatch(fetchAlbumById(albumId))
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);