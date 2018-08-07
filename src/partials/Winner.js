import {
  SVG_NS
} from '../settings';

export default class Victory {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg, player) {

    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'white');

    svg.appendChild(rect);

    let textTop = document.createElementNS(SVG_NS, 'text');
    textTop.setAttributeNS(null, 'x', 100);
    textTop.setAttributeNS(null, 'y', 100);
    textTop.setAttributeNS(null, 'font-size', 10);
    textTop.setAttributeNS(null, 'font-family', 'Silkscreen Web', 'monotype');
    textTop.setAttributeNS(null, 'fill', 'orange');
    textTop.textContent = player;

    svg.appendChild(textTop);

    let textBot = document.createElementNS(SVG_NS, 'text');
    textBot.setAttributeNS(null, 'x', 0);
    textBot.setAttributeNS(null, 'y', 175);
    textBot.setAttributeNS(null, 'font-size', 10);
    textBot.setAttributeNS(null, 'font-family', '\'Silkscreen Web\', monotype');
    textBot.setAttributeNS(null, 'fill', 'orange');
    textBot.textContent = 'You miss 100% of the shots you don\'t take. - Wayne Gretzky\' - Michael Scott';

    svg.appendChild(textBot);
  }
}