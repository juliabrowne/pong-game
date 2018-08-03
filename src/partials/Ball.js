import {
  SVG_NS
} from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  }

  //this resets the ball after a player scores a "goal"
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  render(svg) {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //draw ball
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'fill', 'white');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'cx', this.x); //control ball movement
    ball.setAttributeNS(null, 'cy', this.y); //control ball movement

    svg.appendChild(ball);
  }
}