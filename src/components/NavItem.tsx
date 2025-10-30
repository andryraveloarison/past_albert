import { NavLink } from "react-router-dom";

export function NavItem({ to, icon, children }: { to: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group inline-flex items-center gap-2 px-3 py-1 text-sm font-medium transition ${
          isActive
            ? "border-b border-amber-400/90 text-slate-900 hover:border-amber-400/90"
            : "text-slate-600 hover:text-slate-900 hover:border-amber-400/90"
        }`}
    >
      {icon}
      <span className="text-white/80">{children}</span>
    </NavLink>
  );
}