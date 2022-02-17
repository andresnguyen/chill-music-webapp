import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import PageList from './components/PageList'
import PageDetail from './components/PageDetail'

function CategoryFeature(props) {
  const match = useRouteMatch()

  return (
    <div className="app__container tab--personal active">
      <div className="content" style={{ paddingTop: 160 }}>
        <div className="content__container">
          <Switch>
            <Route path={match.url} exact component={PageList} />
            <Route path={`${match.url}/:id`} exact component={PageDetail} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default CategoryFeature
