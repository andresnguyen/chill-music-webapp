import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import ForgottenPassword from './pages/ForgottenPassword'
import Login from './pages/Login'
import Register from './pages/Register'

function AuthFeature(props) {
  const match = useRouteMatch()
  const isLogin = Boolean(useSelector((state) => state.user.current._id))

  if (isLogin) {
    return <Redirect to="/" />
  }

  return (
    <div className="app__container tab--explore">
      <div className="app__container-content">
        <div className="explore__container">
          <div className="grid">
            <div className="row container__section">
              <div className="col l-12 m-12 c-12">
                <Switch>
                  <Route path={`${match.url}/login`} exact component={Login} />
                  <Route path={`${match.url}/register`} exact component={Register} />
                  <Route path={`${match.url}/forgotten-password`} exact component={ForgottenPassword} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AuthFeature.propTypes = {}

export default AuthFeature
