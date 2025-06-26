import { NavItem } from "./nav-item";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Database Alumnni",
    href: "/alumni",
  },
  {
    label: "Prestasi Mahasiswa",
    href: "/prestasi",
  },
  {
    label: "Loker",
    href: "/loker",
  },
  {
    label: "E-Learning",
    href: "/elearning",
  },
];

export const Navbar = () => {
  return (
    <nav className="h-[80px] bg-white px-10 flex items-center justify-between fixed inset-0">
      <div aria-label="logo" className="w-20">
        <h1 className="font-black text-4xl">TEUAS</h1>
      </div>
      <div aria-label="nav-container" className="flex gap-4 text-gray-400">
        {navItems.map((item) => (
          <NavItem key={item.label} label={item.label} href={item.href} />
        ))}
      </div>
      <div aria-label="login" className="w-20">
        <button className="bg-orange-600 px-6 py-2 rounded text-white font-medium">
          Login
        </button>
      </div>
    </nav>
  );
};
