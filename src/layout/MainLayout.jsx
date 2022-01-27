import { Tabs } from 'antd'
import Header from 'components/Header'
import Modal from 'components/Modal'
import NotFound from 'components/NotFound'
import Sidebar from 'components/Sidebar'
import AuthFeature from 'features/Auth'
import DetailFeature from 'features/Auth/pages/Detail'
import ChartFeature from 'features/Chart'
import ExploreFeature from 'features/Explore'
import FollowingFeature from 'features/Following'
import MusicPlayer from 'features/MusicPlayer'
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
        <Route path="/auth" component={AuthFeature} />
        <Route path="/my-account" component={DetailFeature} />
        <Route path="/mymusic" component={PersonalFeature} />
        <Route path="/following" exact component={FollowingFeature} />
        <Route path="/explore" exact component={ExploreFeature} />
        <Route path="/charts" exact component={ChartFeature} />
        <Route exact component={NotFound} />
      </Switch>
      <MusicPlayer />
      <Modal />
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
