// BlockchainBackground.tsx

const Background = () => {



    // Always use full number of circles
    const numCircles = 8;



    // Debug overlay
    const showDebug = false; // Set to true to see debug info

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-indigo-950 to-black" />

            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10 perspective-1000">
                <div className="absolute inset-0 transform-gpu" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite',
                    transform: 'rotateX(60deg)',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                }} />
            </div>



            {/* Floating circles */}
            <div className="absolute inset-0">
                {Array.from({ length: numCircles }).map((_, i) => {
                    const size = 40 + Math.random() * 60;
                    const duration = 30 + Math.random() * 20;
                    const delay = Math.random() * 10;
                    const startX = Math.random() * 100;
                    const startY = Math.random() * 100;

                    return (
                        <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${startX}%`,
                                top: `${startY}%`,
                                background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%)',
                                animation: `floatCircle${i % 3} ${duration}s ease-in-out infinite`,
                                animationDelay: `${delay}s`,
                                filter: 'blur(3px)',
                                border: '1px solid rgba(147, 51, 234, 0.2)',
                                borderRadius: '50%',
                                aspectRatio: '1/1',
                                boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)',
                                willChange: 'transform',
                                opacity: 0.6 + Math.random() * 0.4,
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                            }}
                        />
                    );
                })}
            </div>

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                    zIndex: 1,
                    backdropFilter: 'blur(0px)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            />



            {/* CSS Animations */}
            <style >{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes floatCircle0 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(100px, -80px, 0) scale(1.2); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes floatCircle1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-120px, -60px, 0) scale(0.8); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes floatCircle2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(80px, -120px, 0) scale(1.3); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

       

      `}</style>
        </div>
    );
};

export default Background;
