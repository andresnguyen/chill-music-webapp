import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import DetailPage from './page/DetailPage'

function SongFeature(props) {
  const match = useRouteMatch()
  return (
    <div className="app__container tab--personal active">
      <div className="content" style={{ paddingTop: 150 }}>
        <div className="content__container">
          <Switch>
            <Route path={`${match.url}/:id`} component={DetailPage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default SongFeature
