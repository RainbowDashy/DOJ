import * as Route from 'koa-router'
import * as Compose from 'koa-compose'

import Auth from '../middleware/auth'
import Account from './account'
import User from './user'
import Problem from './Problem'

const router = new Route({ prefix: '/api' })

router.use(
	Auth({
		type: 'token',
		exclude: /^\/api\/(login|register|reset)$/
	}),
	Account.routes(), Account.allowedMethods(),
	User.routes(), User.allowedMethods(),
	Problem.routes(), Problem.allowedMethods(),
)

export default () => Compose([
	router.routes(),
	router.allowedMethods()
])
