  window.addEventListener('load', () => {
    const canvas = document.getElementById('lines-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const lines = [];

    function spawnLine() {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1 + 0.8;
      const length = Math.random() * 80 + 80;

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;

      lines.push({ x, y, dx, dy, length, alpha: 1 });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];

        const x1 = l.x;
        const y1 = l.y;
        const x2 = l.x - l.dx * l.length;
        const y2 = l.y - l.dy * l.length;

        // gradient wzdłuż linii
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, `rgba(60, 42, 101, ${l.alpha * 0.35})`);
grad.addColorStop(1, `rgba(60, 42, 101, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        l.x += l.dx;
        l.y += l.dy;
        l.alpha -= 0.015;

        if (l.alpha <= 0) lines.splice(i, 1);
      }

      requestAnimationFrame(animate);
    }

    // mniej częste pojawianie się
    function randomSpawner() {
      spawnLine();
      setTimeout(randomSpawner, Math.random() * 2000 + 1500);
    }

    randomSpawner();
    animate();

    // ręczne wywołanie z konsoli
    window.spawnOneLine = () => {
      spawnLine();
      console.log("🌠 Shot");
    };
  });


    window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  });

window.onload = () => {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  if(canvas.length > 0) {
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 6000);
    stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
   opacity: Math.random() * 0.25 + 0.10,  // było 0.5 + 0.5
delta: Math.random() * 0.004 + 0.001
    }));
  }
  window.addEventListener('resize', resize);
  resize(); // initial

  }


  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(60, 42, 101, ${star.opacity * 0.35})`;
      ctx.fill();
      star.opacity += star.delta;
      if (star.opacity >= 1 || star.opacity <= 0.2) star.delta *= -1;
    }
    requestAnimationFrame(animate);
  }

  animate();
};
