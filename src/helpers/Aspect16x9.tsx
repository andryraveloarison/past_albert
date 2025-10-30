export function Aspect16x9({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full pt-[56.25%]">
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}