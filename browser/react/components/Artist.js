'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import {Link} from 'react-router';

export default class Artist extends React.Component {
  componentDidMount () {
    this.props.fetchArtistById(this.props.params.artistId)
  }

  render () {
    const { selectedArtist, children } = this.props;
    console.log(children)

    return (
      <div>
        <div>
          <h3>{ selectedArtist.name }</h3>
          <ul className="nav nav-tabs">
            <li><a>ALBUMS</a></li>
            <li><a>SONGS</a></li>
          </ul>
          { children && React.cloneElement(children, { selectedArtist }) }
          </div>
        <div className="row">
          {
            selectedArtist.albums && selectedArtist.albums.map(album => (
              <div className="col-xs-4" key={album.id}>
                <Link to={"albums/" + album.id} className="thumbnail">
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
        <SongsContainer songs={selectedArtist.songs} />
      </div>
    );

  }
}
