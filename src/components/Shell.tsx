import { Footer } from "./Footer";
import { Topbar } from "./Topbar";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--bg)]  text-slate-900">
      {/* <Topbar /> */}
      <main className="mx-auto w-full ">{children}</main>
      {/*px-4 py-8 lg:py-12 max-w-6xl */}
      <Footer />
    </div>
  );
}