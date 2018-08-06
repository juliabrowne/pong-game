import {
  SVG_NS
} from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, player) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    
    this.player = player;
    this.keyState = {};

    document.addEventListener('keydown', event => {
      this.keyState[event.key || event.which] = true;
    }, true);

    document.addEventListener('keyup', event => {
      this.keyState[event.key || event.which] = false;
    }, true);

    // document.addEventListener('keydown', event => {
    //   switch (event.key) {
    //     case up:
    //       this.up();
    //       break;
    //     case down:
    //       this.down();
    //       break;
    //   }
    // });
  } //end of constructor

  up(){
    this.y = Math.max(5, this.y - this.speed);
  }
  down(){
    this.y = Math.min(this.boardHeight - this.height - 5, this.y + this.speed);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    //player movement
    if (this.keyState['a'] && this.player === 'player1') {
      this.up();
    }
    if (this.keyState['z'] && this.player === 'player1') {
      this.down();
    }
    if (this.keyState['ArrowUp'] && this.player === 'player2') {
      this.up();
    }
    if (this.keyState['ArrowDown'] && this.player === 'player2') {
      this.down();
    }


    let img = document.createElementNS(SVG_NS,'image');
    img.setAttributeNS(null,'height', this.height);
    img.setAttributeNS(null,'width', this.width);
    img.setAttributeNS(null, 'href', './jim.png');
    img.setAttributeNS(null,'x', this.x);
    img.setAttributeNS(null,'y', this.y);
    img.setAttributeNS(null, 'visibility', 'visible');
    svg.appendChild(img);


    // let rect = document.createElementNS(SVG_NS, 'rect');
    // rect.setAttributeNS(null, 'fill', '#353535');
    // rect.setAttributeNS(null, 'width', this.width);
    // rect.setAttributeNS(null, 'height', this.height);
    // rect.setAttributeNS(null, 'x', this.x);
    // rect.setAttributeNS(null, 'y', this.y);

    // svg.appendChild(rect);
  }

}