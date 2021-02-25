import React, {Component} from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'

import Databook from '../components/Campaigns'

class Root extends Component {
    
    constructor(props) {
        super(props);     
    }
    render() {
        return (
     
                <Switch>
                    <Redirect exact from="/" to="/campaigns" /> 
                    <Route path="/campaigns" render={props => <Databook  {...props} /> } />
                </Switch>


            
        )
    }
}

export default withRouter(Root)