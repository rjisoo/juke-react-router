'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';




export default class Album extends React.Component {

	componentDidMount() {
		this.props.getTheAlbum(this.props.params.albumId)

		// fetch('/api/albums/' + this.props.params.albumId)
		// 	.then((res)=> res.json())
		// 	.then(album => console.log(album));

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
