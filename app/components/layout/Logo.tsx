import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative flex-shrink-0">
        {/* Sophisticated Logo - Modern wood products symbol */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Background with subtle gradient effect */}
          <defs>
            <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          
          {/* Main container with rounded corners */}
          <rect x="4" y="4" width="52" height="52" rx="8" fill="url(#woodGradient)" opacity="0.1" />
          
          {/* Stylized wood planks - modern perspective */}
          <g>
            {/* Top plank - front view */}
            <rect x="12" y="14" width="36" height="8" rx="2" fill="#2563eb" />
            <rect x="12" y="14" width="36" height="2" rx="2" fill="#3b82f6" />
            <line x1="14" y1="16" x2="46" y2="16" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
            <line x1="14" y1="19" x2="46" y2="19" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
            
            {/* Middle plank - angled perspective */}
            <path
              d="M 16 26 L 48 26 L 50 32 L 18 32 Z"
              fill="#3b82f6"
            />
            <path
              d="M 16 26 L 48 26 L 48 28 L 16 28 Z"
              fill="#2563eb"
            />
            <line x1="18" y1="28" x2="48" y2="28" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
            <line x1="18" y1="30" x2="48" y2="30" stroke="#1e40af" strokeWidth="0.5" opacity="0.2" />
            
            {/* Bottom plank - side view */}
            <rect x="20" y="36" width="28" height="8" rx="2" fill="#1e40af" />
            <rect x="20" y="36" width="28" height="2" rx="2" fill="#2563eb" />
            <line x1="22" y1="38" x2="46" y2="38" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
            <line x1="22" y1="41" x2="46" y2="41" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
          </g>
          
          {/* Elegant "S" monogram overlay */}
          <path
            d="M 22 20 
               C 22 18, 24 16, 26 16
               C 28 16, 30 18, 30 20
               C 30 22, 28 24, 26 24
               L 26 28
               C 28 28, 30 30, 30 32
               C 30 34, 28 36, 26 36
               C 24 36, 22 34, 22 32"
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-blue-600 leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
          Selmaster Vest
        </span>
        <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">
          Produse Lemn de Calitate
        </span>
      </div>
    </Link>
  );
}

