import { HtmlDiv } from 'htmlmodule'
import { Square } from './Square.js'

export class Board extends HtmlDiv
{
  renderSquare(i) {
    return new Square({
      val : this.props.squares[i],
      onClick : () => this.props.onClick(i),
    })
  }

  render() {
    return [
      new HtmlDiv({
        className : 'board-row',
        children : [
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2),
        ],
      }),
      new HtmlDiv({
        className : 'board-row',
        children : [
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5),
        ],
      }),
      new HtmlDiv({
        className : 'board-row',
        children : [
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8),
        ],
      }),
    ]
  }
}
