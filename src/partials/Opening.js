import {
  SVG_NS
} from '../settings';

export default class Opening {

  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg) {
    let opening = document.createElementNS(SVG_NS, 'text');
    opening.setAttributeNS(null, 'fill', 'black');
    opening.setAttributeNS(null, 'x', this.x);
    opening.setAttributeNS(null, 'y', this.y);
    opening.setAttributeNS(null, 'font-size', this.size);
    opening.setAttributeNS(null, 'font-family', 'Silkscreen Web');
    text.textContent = Press Here to Play;

    svg.appendChild(text);
  }


}