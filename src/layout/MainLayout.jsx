
import React from 'react'
import { Route, Switch } from 'react-router-dom'


import SongModalCreate from 'components/SongModalCreate'
import SongModalUpdate from 'components/SongModalUpdate'
import SongModalDelete from 'components/SongModalDelete'
import Header from 'components/Header'
import NotFound from 'components/NotFound'
import { PrivateRoute } from 'components/PrivateRoute'
import Sidebar from 'components/Sidebar'
import AlbumFeature from 'features/Album'
import ArtistFeature from 'features/Artist'
import AuthFeature from 'features/Auth'
import ChangePasswordPage from 'features/Auth/pages/ChangePassword'
import DetailPage from 'features/Auth/pages/UserDetail'
import ChartFeature from 'features/Chart'
import ExploreFeature from 'features/Explore'
import FollowingFeature from 'features/Following'
import MusicPlayer from 'features/MusicPlayer'
import PersonalFeature from 'features/Personal'
import PlaylistFeature from 'features/Playlist'
import CategoryFeature from 'features/Category'
import SearchFeature from 'features/Search'
import HistoryFeature from 'features/History'
import SongFeature from 'features/Song'



import PlaylistModalCreate from 'components/PlaylistModalCreate'
import PlaylistModalUpdate from 'components/PlaylistModalUpdate'
import PlaylistModalDelete from 'components/PlaylistModalDelete'
import AddToPlaylistModal from 'components/AddToPlaylistModal'

function MainLayout() {
  return (
    <div
      className="app grid"
      style={{
        backgroundImage: `url('https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/theme1.svg')`,
      }}
    >
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ExploreFeature} />
        <Route path="/auth" component={AuthFeature} />
        <PrivateRoute path="/my-account" component={DetailPage} />
        <PrivateRoute path="/change-pw" component={ChangePasswordPage} />
        <PrivateRoute path="/mymusic" component={PersonalFeature} />
        <Route path="/following" exact component={FollowingFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/playlists" component={PlaylistFeature} />
        <Route path="/categories" component={CategoryFeature} />
        <PrivateRoute path="/history" component={HistoryFeature} />
        <Route path="/search" component={SearchFeature} />
        <Route path="/explore" exact component={ExploreFeature} />
        <Route path="/artists/:id" exact component={ArtistFeature} />
        <Route path="/songs" component={SongFeature} />
        <Route path="/charts" exact component={ChartFeature} />
        <Route exact component={NotFound} />
      </Switch>
      <MusicPlayer />

      <SongModalUpdate />
      <SongModalCreate />
      <SongModalDelete />

      <PlaylistModalCreate />
      <PlaylistModalUpdate />
      <PlaylistModalDelete />
      <AddToPlaylistModal />

    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
