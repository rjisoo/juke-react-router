'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

export default class Album extends React.Component {

	componentDidMount() {
		this.props.getTheAlbum(this.props.params.albumId)
	}

	render() {
		const { selectedAlbum } = this.props;
		return (
			<div className="album">
				<div>
					<h3>{ selectedAlbum.name }</h3>
					<img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
				</div>
				<SongsContainer songs={selectedAlbum.songs} />
			</div>
		)
	}
}
