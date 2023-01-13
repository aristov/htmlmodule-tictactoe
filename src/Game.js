import { HtmlButton, HtmlDiv, HtmlLi, HtmlOl } from 'htmlmodule'
import { Board } from './Board.js'
import { calculateWinner } from './calculateWinner.js'

export class Game extends HtmlDiv
{
  static className = 'game'

  state = {
    history : [
      {
        squares : Array(9).fill(null),
      },
    ],
    stepNumber : 0,
    xIsNext : true,
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if(calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history : history.concat([
        {
          squares : squares,
        },
      ]),
      stepNumber : history.length,
      xIsNext : !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber : step,
      xIsNext : (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start'
      return new HtmlLi({
        key : move,
        children : new HtmlButton({
          onclick : () => this.jumpTo(move),
          children : desc,
        }),
      })
    })

    let status
    if(winner) {
      status = 'Winner: ' + winner
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return [
      new HtmlDiv({
        className : 'game-board',
        children : new Board({
          squares : current.squares,
          onClick : i => this.handleClick(i),
        }),
      }),
      new HtmlDiv({
        className : 'game-info',
        children : [
          new HtmlDiv(status),
          new HtmlOl(moves),
        ],
      }),
    ]
  }
}
