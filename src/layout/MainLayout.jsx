import Header from 'components/Header'
import MusicPlayer from 'components/MusicPlayer'
import NotFound from 'components/NotFound'
import Sidebar from 'components/Sidebar'
import ChartFeature from 'features/Chart'
import ExploreFeature from 'features/Explore'
import FollowingFeature from 'features/Following'
import PersonalFeature from 'features/Personal'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
        <Route path="/mymusic" component={PersonalFeature} />
        <Route path="/following" exact component={FollowingFeature} />
        <Route path="/explore" exact component={ExploreFeature} />
        <Route path="/charts" exact component={ChartFeature} />
        <Route exact component={NotFound} />
      </Switch>
      <MusicPlayer />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
