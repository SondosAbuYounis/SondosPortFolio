export type TypographyProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

export function TrackingCalc(
  fontSize: number,
  trackingPercent: number
): string {
  const emValue = (fontSize * (trackingPercent / 100)) / fontSize;
  return `${emValue.toFixed(3)}em`;
}
