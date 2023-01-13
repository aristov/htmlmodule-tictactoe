import { HtmlButton } from 'htmlmodule'

export class Square extends HtmlButton
{
  static className = 'square'

  render() {
    this.onclick = this.props.onClick
    return this.props.val
  }
}
