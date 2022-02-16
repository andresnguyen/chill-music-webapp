import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import DetailPage from './page/DetailPage'


function AlbumFeature(props) {
  const match = useRouteMatch()
  return (
    <div className="app__container tab--personal active">

      <div className="content">
        <div className="content__container">
          <Switch>
            <Route path={`${match.url}/:id`} component={DetailPage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default AlbumFeature
