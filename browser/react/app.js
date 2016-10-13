'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import AlbumContainer from './containers/AlbumContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import Album from './components/Album';
import ArtistSongsContainer from './containers/ArtistSongsContainer';
import ArtistAlbumsContainer from './containers/ArtistAlbumsContainer';


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={AppContainer}>
				<IndexRedirect to="/albums" />
				<Route path='artists' component={ArtistsContainer} />
				<Route path='artists/:artistId' component={ArtistContainer}>
					<Route path='songs' component={ArtistSongsContainer} />
					<Route path='albums' component={ArtistAlbumsContainer} />
				</Route>
				<Route path='albums' component={AlbumsContainer} />
				<Route path="albums/:albumId" component={AlbumContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);




// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path='/' component={AppContainer}>
//         <IndexRedirect to="/albums" />
//         <Route path='artists' component={ArtistsContainer} />
//         <Route path='albums' component={AlbumsContainer}>
//           <Route path=":albumId" component={ArtistsContainer} />
//         </Route>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// );