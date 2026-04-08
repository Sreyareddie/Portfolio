import { useEffect, useRef, useMemo } from "react";

const Particles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 60 }).map((_, i) => {
      const type = i % 2 === 0 ? "star" : "dot";
      return {
        id: i,
        type,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 20}s`,
        duration: type === "star" ? `${2 + Math.random() * 3}s` : `${12 + Math.random() * 20}s`,
        size: type === "star" ? `${Math.random() * 2.5 + 1}px` : `${Math.random() * 5 + 2}px`,
        opacity: type === "star" ? 0.9 : 0.45,
        color: type === "star" ? "bg-white" : "bg-violet-300",
      };
    }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.color} ${
            p.type === "star" 
              ? "animate-twinkle shadow-[0_0_6px_2px_rgba(255,255,255,0.4)]" 
              : "animate-particle blur-[1px] shadow-[0_0_8px_3px_rgba(167,139,250,0.3)]"
          }`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--delay": p.delay,
            "--duration": p.duration,
            "--opacity": p.opacity,
            opacity: p.type === "star" ? 0 : p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const Comet = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const mousePosRef = useRef({ x: -200, y: -200 });
  const smoothPosRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const TRAIL_LENGTH = 24;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      // Lerp the smooth position toward the real mouse position
      const sp = smoothPosRef.current;
      const mp = mousePosRef.current;
      smoothPosRef.current = {
        x: sp.x + (mp.x - sp.x) * 0.12,
        y: sp.y + (mp.y - sp.y) * 0.12,
      };

      // Push current smooth pos to trail
      trailRef.current.unshift({ ...smoothPosRef.current });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.length = TRAIL_LENGTH;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      trail.forEach((pos, i) => {
        const progress = 1 - i / TRAIL_LENGTH; // 1 at head, 0 at tail
        const radius = progress * 7;           // head radius = 7px
        const alpha = progress * 0.85;

        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius * 2.5);
        grad.addColorStop(0, `rgba(220, 180, 255, ${alpha})`);
        grad.addColorStop(0.4, `rgba(139, 92, 246, ${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(99, 38, 200, 0)`);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Hard bright core at the head
      if (trail.length > 0) {
        const head = trail[0];
        const coreGrad = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 6);
        coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        coreGrad.addColorStop(0.5, "rgba(200, 160, 255, 0.6)");
        coreGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

const Background = ({ activeSection = "hero" }) => {

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0d1a]">
      {/* Background base gradients */}
      <div 
        className="absolute inset-0 bg-transition"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.18), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.10), transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 60%)
          `
        }}
      />
      
      {/* Large Animating Blobs with improved visual depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-violet-600/10 blur-[140px] animate-blob mix-blend-plus-lighter" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[130px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-15%] left-[5%] w-[65%] h-[65%] rounded-full bg-cyan-600/10 blur-[130px] animate-blob animation-delay-4000" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-pink-600/5 blur-[120px] animate-pulse-glow" />
      
      {/* Aurora Effect */}
      <div 
        className="absolute inset-x-[-20%] top-[5%] h-[45rem] blur-[160px] opacity-40 animate-aurora bg-transition"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, rgba(124, 58, 237, 0.18), rgba(99, 102, 241, 0.10), rgba(34, 211, 238, 0.12), rgba(124, 58, 237, 0.18))`
        }}
      />
      
      {/* Particles Layer */}
      <Particles />

      {/* Comet */}
      <Comet />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM54 6c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 6c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM30 30c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Final Vignette/Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d1a]/20 to-[#0a0d1a]/90" />
    </div>
  );
};

export default Background;
