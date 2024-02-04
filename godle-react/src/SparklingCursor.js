import React from "react";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

class SparklingCursor extends React.Component {
  state = {
    cHeight: 0,
    cWidth: 0,
  };

  canvas = React.createRef();

  componentDidMount = () => {
    // Set height and width on load because if set in state body isn't defined yet.
    this.setState({
      cHeight: window.innerHeight,
      cWidth: window.innerWidth,
    });

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          cHeight: window.innerHeight,
          cWidth: window.innerWidth,
        });
      },
      false
    );

    // If the device supports cursors, start animation.
    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }
  };

  startAnimation = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");

    const points = [];

    const addPoint = (x, y) => {
      const point = new Point(x, y);
      points.push(point);
    };

    document.addEventListener(
      "mousemove",
      ({ clientX, clientY }) => {
        // Randomly distribute smaller stars around the cursor with increased offsets
        for (let i = 0; i < 3; i++) {
          const offsetX = Math.random() *10 - 5; // Increased offset
          const offsetY = Math.random() * 10 - 5; // Increased offset
          addPoint(clientX - canvas.offsetLeft + offsetX, clientY - canvas.offsetTop + offsetY);
        }
      },
      false
    );

    const animatePoints = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const duration = (0.7 * (1 * 1000)) / 60; // Last 80% of a frame per point
      
        for (let i = 0; i < points.length; ++i) {
          const point = points[i];
      
          point.lifetime += 1;
      
          if (point.lifetime > duration) {
            // If the point dies, remove it.
            points.shift();
          } else {
            // Otherwise animate it:
      
            // As the lifetime goes on, lifePercent goes from 0 to 1.
            const lifePercent = point.lifetime / duration;
            const spreadRate = 7 * (1 - lifePercent);
      
            ctx.lineJoin = "round";
            ctx.lineWidth = spreadRate;
      
            // Use HSL color model for rainbow effect
            const hue = (360 * lifePercent) % 360;
            const saturation = 100;
            const lightness = 50;
            ctx.fillStyle = `hsl(${hue},${saturation}%,${lightness}%)`;
      
            // Draw a smaller star at the current point
            this.drawStar(ctx, point.x, point.y, 5, 1, 4);
          }
        }
        requestAnimationFrame(animatePoints);
      };
      
      animatePoints();      
  };

  drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    const rot = (Math.PI / 2) * 3; // Initial rotation angle
    const x = cx; // X-coordinate of the center
    const y = cy; // Y-coordinate of the center
    const step = (Math.PI * 2) / (spikes * 2); // Adjusted step for better symmetry

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius); // Move to the starting point at the top

    for (let i = 0; i < spikes * 2; i++) {
      // Calculate outer and inner points of the star
      const angle = rot + i * step;
      const radius = i % 2 === 0 ? outerRadius : innerRadius; // Alternating outer and inner radii
      const pointX = x + Math.cos(angle) * radius;
      const pointY = y + Math.sin(angle) * radius;
      ctx.lineTo(pointX, pointY);
    }

    ctx.closePath();

    ctx.fill(); // Fill the star
  };

  render = () => {
    const { cHeight, cWidth } = this.state;
    return (
      <canvas
        ref={this.canvas}
        width={cWidth}
        height={cHeight}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
      />
    );
  };
}

export default SparklingCursor;

