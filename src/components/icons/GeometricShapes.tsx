export function HexagonPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 10L180 55V145L100 190L20 145V55L100 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      <path
        d="M100 40L150 70V130L100 160L50 130V70L100 40Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      <path
        d="M100 70L120 82V118L100 130L80 118V82L100 70Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="25" y1="0" x2="25" y2="100" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="75" y1="0" x2="75" y2="100" stroke="currentColor" strokeOpacity="0.1" />
      <rect x="25" y="25" width="25" height="25" fill="currentColor" fillOpacity="0.05" />
      <rect x="50" y="50" width="25" height="25" fill="currentColor" fillOpacity="0.05" />
    </svg>
  );
}

export function ConstructionIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="48" width="48" height="8" fill="currentColor" fillOpacity="0.2" />
      <rect x="12" y="32" width="40" height="16" fill="currentColor" fillOpacity="0.15" />
      <rect x="16" y="16" width="32" height="16" fill="currentColor" fillOpacity="0.1" />
      <rect x="24" y="4" width="16" height="12" fill="currentColor" fillOpacity="0.2" />
      <line x1="32" y1="4" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="8" y1="56" x2="56" y2="56" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
    </svg>
  );
}

export function BlueprintLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="20" width="160" height="160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
      <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="100" cy="100" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}
