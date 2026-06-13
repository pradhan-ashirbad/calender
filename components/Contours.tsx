type Props = {
  className?: string;
  stroke?: string;
};

/**
 * Signature geological contour-line motif used as a section texture.
 * Evokes topographic survey maps — on-brand for a gold exploration company.
 */
export default function Contours({ className = '', stroke = 'currentColor' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={stroke} strokeWidth="1.25" strokeOpacity="0.5">
        <path d="M-40 470c160-70 300-30 470-90s330-150 520-120 250 120 330 110" />
        <path d="M-40 520c170-70 330-40 500-110s320-150 520-120 230 130 300 120" />
        <path d="M-40 410c150-60 300-10 450-80s340-160 540-130 240 120 300 120" />
        <path d="M600 70c120-50 280-40 360 30s60 190-70 230-300 20-360-70 0-130 70-190Z" />
        <path d="M620 120c90-36 210-28 270 26s44 138-54 168-220 12-270-52 16-114 54-142Z" />
        <path d="M660 170c54-22 132-14 168 18s28 86-34 104-138 8-168-32 10-72 34-90Z" />
      </g>
    </svg>
  );
}
