"use client";

import { Suspense, lazy, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  url: string;
  fallback?: React.ReactNode;
  className?: string;
}

export default function SplineScene({
  url,
  fallback,
  className = "",
}: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile || hasError) {
    return (
      <div className={className}>
        {fallback || (
          <div className="w-full h-full bg-gradient-card rounded-2xl flex items-center justify-center">
            <div className="text-center text-white/30">
              <p className="text-sm">3D Scene</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full bg-gradient-card rounded-2xl animate-pulse" />
        }
      >
        <Spline
          scene={url}
          onError={() => setHasError(true)}
        />
      </Suspense>
    </div>
  );
}
