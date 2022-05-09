import { HtmlButton } from 'htmlmodule'

export class Square extends HtmlButton
{
  className = 'square'

  render() {
    this.onclick = this.props.onClick
    return this.props.val
  }
}
