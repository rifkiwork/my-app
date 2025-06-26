"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
  // icon:
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn(href === pathname && "text-orange-600")}>
      {label}
    </Link>
  );
};
