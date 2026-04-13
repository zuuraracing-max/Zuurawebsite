import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const streaks = Array.from({ length: 70 }, () => mk(true));

    function mk(rand) {
      const side = Math.random() > .5 ? 1 : -1;
      const angle = ((Math.random() * 50 - 25) * Math.PI / 180) + side * Math.PI / 2;
      return {
        x: rand ? Math.random() * window.innerWidth : window.innerWidth / 2,
        y: rand ? Math.random() * window.innerHeight : window.innerHeight / 2,
        len: 90 + Math.random() * 300,
        spd: 8 + Math.random() * 16,
        op: .18 + Math.random() * .5,
        w: .4 + Math.random() * 1.8,
        col: Math.random() > .38 ? '#D4A017' : '#fff',
        angle,
        prog: rand ? Math.random() : 0,
      };
    }

    function rst(s) {
      const W = canvas.width, H = canvas.height;
      const e = Math.floor(Math.random() * 4);
      if (e === 0) { s.x = Math.random() * W; s.y = -60; }
      else if (e === 1) { s.x = W + 60; s.y = Math.random() * H; }
      else if (e === 2) { s.x = Math.random() * W; s.y = H + 60; }
      else { s.x = -60; s.y = Math.random() * H; }
      s.len = 90 + Math.random() * 300;
      s.spd = 8 + Math.random() * 16;
      s.op = .18 + Math.random() * .5;
      s.w = .4 + Math.random() * 1.8;
      s.col = Math.random() > .38 ? '#D4A017' : '#fff';
      const sd = Math.random() > .5 ? 1 : -1;
      s.angle = ((Math.random() * 50 - 25) * Math.PI / 180) + sd * Math.PI / 2;
      s.prog = 0;
    }

    let roadOff = 0;

    function draw() {
      const W = canvas.width, H = canvas.height, cx = W / 2, vY = H * .5;
      ctx.fillStyle = '#080706';
      ctx.fillRect(0, 0, W, H);

      const vg = ctx.createRadialGradient(cx, H, 0, cx, H, H * 1.4);
      vg.addColorStop(0, 'rgba(20,16,10,.88)');
      vg.addColorStop(.5, 'rgba(8,7,6,.55)');
      vg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      const pl = (bx, color, dash) => {
        ctx.beginPath(); ctx.moveTo(cx, vY); ctx.lineTo(bx, H + 30);
        ctx.strokeStyle = color; ctx.lineWidth = 2;
        ctx.setLineDash(dash ? [28, 22] : []);
        ctx.lineDashOffset = -roadOff;
        ctx.globalAlpha = 1; ctx.stroke(); ctx.setLineDash([]);
      };
      pl(cx - W * .48, 'rgba(212,160,23,.14)', false);
      pl(cx + W * .48, 'rgba(212,160,23,.14)', false);
      pl(cx - 5, 'rgba(212,160,23,.36)', true);
      pl(cx + 5, 'rgba(212,160,23,.36)', true);
      roadOff = (roadOff + 2.5) % 50;

      const gl = ctx.createRadialGradient(cx, H * .5, 0, cx, H * .5, W * .5);
      gl.addColorStop(0, 'rgba(212,160,23,.055)');
      gl.addColorStop(.45, 'rgba(160,70,0,.022)');
      gl.addColorStop(1, 'transparent');
      ctx.fillStyle = gl;
      ctx.fillRect(0, 0, W, H);

      streaks.forEach(s => {
        s.prog += s.spd / (s.len * 3);
        const dx = Math.cos(s.angle) * s.len * s.prog;
        const dy = Math.sin(s.angle) * s.len * s.prog;
        const gr = ctx.createLinearGradient(s.x, s.y, s.x + dx, s.y + dy);
        gr.addColorStop(0, 'transparent');
        gr.addColorStop(.5, s.col + '88');
        gr.addColorStop(1, s.col);
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + dx, s.y + dy);
        ctx.strokeStyle = gr;
        ctx.globalAlpha = s.op * Math.min(s.prog * 2, 1);
        ctx.lineWidth = s.w;
        ctx.stroke();
        ctx.globalAlpha = 1;
        if (s.prog >= 1) rst(s);
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
};

export default Background;
