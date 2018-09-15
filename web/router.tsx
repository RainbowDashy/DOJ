import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Contests from './page/contest'
import Contest from './page/contest/id'
import Home from './page/home'
import Login from './page/login'
import Problems from './page/problem'
import Problem from './page/problem/id'
import Rank from './page/rank'
import Register from './page/register'
import Reset from './page/reset'
import Setting from './page/setting'
import Submissions from './page/submission'
import Submission from './page/submission/id'

export default () => <Switch>
	<Route path="/login" component={Login} />
	<Route path="/register" component={Register} />
	<Route path="/reset" component={Reset} />
	<Route path="/problem/:id" component={Problem} />
	<Route path="/problem" component={Problems} />
	<Route path="/contest/:id" component={Contest} />
	<Route path="/contest" component={Contests} />
	<Route path="/submission/:id" component={Submission} />
	<Route path="/submission" component={Submissions} />
	<Route path="/rank" component={Rank} />
	<Route path="/setting" component={Setting} />
	<Route path="/" component={Home} />
</Switch>
