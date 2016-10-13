'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component {
	constructor(props) {
		super(props);
	}

	selectAlbum () {
		console.log(this.props.params.albumId);
	}

	render() {
		var album = this.props.params.albumId;
		return (
			<h3>{album}</h3>
		 )
	}
}

// export default ({ albumId }) => (
	
//   <div className="album">
//     <div>
//       <h3>{ selectedAlbum.name }</h3>
//       <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
//     </div>
//     <SongsContainer songs={selectedAlbum.songs} />
//   </div>
// );