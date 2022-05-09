import { Game } from './Game.js'

const render = app => {
  app?.destroy()
  return Game.render({}, document.getElementById('root'))
}

let app = render()

module.hot?.accept(['./Game'], () => app = render(app))
