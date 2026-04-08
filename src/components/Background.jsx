import { useEffect, useRef, useMemo } from "react";

/* ─── Star Field ─────────────────────────────────────────────── */
const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 220 }).map((_, i) => {
      const tier = i < 80 ? "bright" : i < 160 ? "mid" : "dim";
      // Vary star colours: blue-white, warm-white, yellow-white
      const colors = [
        "rgba(200,220,255,1)",
        "rgba(255,255,240,1)",
        "rgba(180,200,255,1)",
        "rgba(255,245,200,1)",
        "rgba(230,245,255,1)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size:
          tier === "bright"
            ? `${1.2 + Math.random() * 1.8}px`
            : tier === "mid"
            ? `${0.7 + Math.random() * 1}px`
            : `${0.4 + Math.random() * 0.7}px`,
        opacity:
          tier === "bright"
            ? 0.7 + Math.random() * 0.3
            : tier === "mid"
            ? 0.35 + Math.random() * 0.3
            : 0.15 + Math.random() * 0.2,
        delay: `${Math.random() * 12}s`,
        duration: `${3 + Math.random() * 6}s`,
        color,
        glow:
          tier === "bright"
            ? `0 0 ${4 + Math.random() * 6}px 1px ${color.replace("1)", "0.7)")}`
            : "none",
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: s.glow,
            "--delay": s.delay,
            "--duration": s.duration,
            "--opacity": s.opacity,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
};

/* ─── Shooting Stars Canvas ──────────────────────────────────── */
const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const meteors = [];
    const spawnMeteor = () => {
      const x = Math.random() * canvas.width * 1.2;
      const y = Math.random() * canvas.height * 0.4;
      const angle = Math.PI / 5 + (Math.random() * Math.PI) / 12;
      const speed = 6 + Math.random() * 8;
      const length = 80 + Math.random() * 140;
      meteors.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, length, life: 1 });
    };

    let spawnTimer = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnTimer++;
      if (spawnTimer > 90 + Math.random() * 120) {
        spawnMeteor();
        spawnTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.018;

        if (m.life <= 0 || m.x > canvas.width + 100 || m.y > canvas.height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - m.vx * (m.length / (m.vx || 1));
        const tailY = m.y - m.vy * (m.length / (m.vy || 1));
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.7, `rgba(200,230,255,${m.life * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${m.life * 0.9})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Head glow
        const hGrad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 5);
        hGrad.addColorStop(0, `rgba(255,255,255,${m.life})`);
        hGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(m.x, m.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = hGrad;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />;
};

/* ─── Comet Trail (mouse) ────────────────────────────────────── */
const CometTrail = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const mousePosRef = useRef({ x: -200, y: -200 });
  const smoothPosRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const TRAIL_LENGTH = 28;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e) => { mousePosRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      const sp = smoothPosRef.current;
      const mp = mousePosRef.current;
      smoothPosRef.current = { x: sp.x + (mp.x - sp.x) * 0.1, y: sp.y + (mp.y - sp.y) * 0.1 };
      trailRef.current.unshift({ ...smoothPosRef.current });
      if (trailRef.current.length > TRAIL_LENGTH) trailRef.current.length = TRAIL_LENGTH;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trailRef.current.forEach((pos, i) => {
        const progress = 1 - i / TRAIL_LENGTH;
        const radius = progress * 6;
        const alpha = progress * 0.8;
        const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius * 3);
        g.addColorStop(0, `rgba(180,215,255,${alpha})`);
        g.addColorStop(0.4, `rgba(96,165,250,${alpha * 0.5})`);
        g.addColorStop(1, "rgba(30,80,200,0)");
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      if (trailRef.current.length > 0) {
        const head = trailRef.current[0];
        const cg = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 6);
        cg.addColorStop(0, "rgba(255,255,255,0.95)");
        cg.addColorStop(0.5, "rgba(160,210,255,0.6)");
        cg.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />;
};

/* ─── Background ─────────────────────────────────────────────── */
const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#04060f" }}>

    {/* Deep-space base gradient */}
    <div className="absolute inset-0" style={{
      background: `
        radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,15,50,0.95) 0%, transparent 70%),
        radial-gradient(ellipse 100% 80% at 20% 100%, rgba(5,10,40,0.8) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 60%, rgba(8,20,55,0.6) 0%, transparent 60%)
      `
    }} />

    {/* Milky Way galaxy arm — sweeping diagonal nebula */}
    <div className="absolute inset-0 opacity-30" style={{
      background: `
        radial-gradient(ellipse 160% 25% at 55% 52%, rgba(60,80,180,0.22) 0%, transparent 65%),
        radial-gradient(ellipse 120% 18% at 45% 48%, rgba(90,60,160,0.15) 0%, transparent 60%),
        radial-gradient(ellipse 200% 15% at 50% 50%, rgba(40,70,200,0.10) 0%, transparent 70%)
      `,
      transform: "rotate(-28deg) scaleY(1.4)",
      transformOrigin: "center center",
    }} />

    {/* Nebula clouds */}
    <div className="absolute top-[5%] left-[-5%] w-[55%] h-[50%] rounded-full blur-[180px] opacity-20 animate-nebula-1"
      style={{ background: "radial-gradient(ellipse, rgba(30,60,200,0.6) 0%, rgba(20,40,120,0.2) 50%, transparent 80%)" }} />
    <div className="absolute top-[40%] right-[-10%] w-[50%] h-[55%] rounded-full blur-[160px] opacity-15 animate-nebula-2"
      style={{ background: "radial-gradient(ellipse, rgba(0,160,220,0.4) 0%, rgba(10,80,160,0.15) 50%, transparent 80%)" }} />
    <div className="absolute bottom-[-10%] left-[15%] w-[60%] h-[45%] rounded-full blur-[200px] opacity-20 animate-nebula-3"
      style={{ background: "radial-gradient(ellipse, rgba(50,30,150,0.5) 0%, rgba(20,20,80,0.2) 50%, transparent 80%)" }} />

    {/* Faint galactic dust streaks */}
    <div className="absolute inset-0 opacity-[0.07]" style={{
      background: `
        repeating-linear-gradient(
          -30deg,
          transparent,
          transparent 120px,
          rgba(100,140,255,0.08) 121px,
          rgba(100,140,255,0.08) 122px
        )
      `
    }} />

    {/* Star field */}
    <StarField />

    {/* Shooting stars */}
    <ShootingStars />

    {/* Mouse comet */}
    <CometTrail />

    {/* Subtle dot grid */}
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='0.8' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` }}
    />

    {/* Bottom vignette for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04060f]/80 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/40 via-transparent to-[#04060f]/40 pointer-events-none" />
  </div>
);

export default Background;
