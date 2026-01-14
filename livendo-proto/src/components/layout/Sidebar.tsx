"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, Users, Receipt, PieChart, Settings, LifeBuoy, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Přehled", href: "/", icon: LayoutDashboard },
  { name: "Nemovitosti", href: "/properties", icon: Building2 },
  { name: "Nájemníci", href: "/tenants", icon: Users },
  { name: "Finance", href: "/finance", icon: Receipt },
  { name: "Analytika", href: "/analytics", icon: PieChart },
]

const secondaryNavigation = [
  { name: "Podpora", href: "/support", icon: LifeBuoy },
  { name: "Nastavení", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50 bg-zinc-950 border-r border-white/5">
      {/* Brand Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/50">
                <Zap className="h-5 w-5 text-white fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Livendo</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {/* Ecosystem Switcher Visual */}
        <div className="mb-8 px-2">
            <div className="text-xs font-semibold leading-6 text-zinc-500 uppercase tracking-wider mb-3">
                Propojené Systémy
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/5 opacity-50 hover:opacity-100 transition-opacity cursor-not-allowed">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-sm font-medium text-zinc-300">Homey (Tenant App)</span>
                </div>
                 <div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-sm font-medium text-zinc-300">UlovDomov.cz</span>
                </div>
                 <div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                     <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                     <span className="text-sm font-medium text-zinc-300">SIAN (Syncing...)</span>
                </div>
            </div>
        </div>

        <ul role="list" className="space-y-1">

          <li>
            <div className="text-xs font-semibold leading-6 text-zinc-500 uppercase tracking-wider mb-2 px-2">
                Menu
            </div>
            <ul role="list" className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/50"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border-transparent",
                      "group flex gap-x-3 rounded-md border p-2 text-sm leading-6 font-medium transition-all duration-200"
                    )}
                  >
                    <item.icon
                      className={cn(
                        pathname === item.href ? "text-indigo-400" : "text-zinc-500 group-hover:text-white",
                        "h-5 w-5 shrink-0 transition-colors"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="mt-8">
            <div className="text-xs font-semibold leading-6 text-zinc-500 uppercase tracking-wider mb-2 px-2">
                Systém
            </div>
            <ul role="list" className="space-y-1">
              <li>
                  <Link
                    href="/client"
                    className="group flex gap-x-3 rounded-md border border-transparent p-2 text-sm leading-6 font-medium text-amber-500 hover:bg-white/5 hover:text-amber-400 transition-all duration-200"
                  >
                    <Users
                      className="h-5 w-5 shrink-0 text-amber-500 group-hover:text-amber-400 transition-colors"
                      aria-hidden="true"
                    />
                    Klientská zóna (Demo)
                  </Link>
              </li>
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex gap-x-3 rounded-md border border-transparent p-2 text-sm leading-6 font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-all duration-200"
                  >
                    <item.icon
                      className="h-5 w-5 shrink-0 text-zinc-500 group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/* User Profile Footer */}
      <div className="border-t border-white/5 p-4">
        <div className="group flex items-center gap-x-3 rounded-md p-2 hover:bg-white/5 cursor-pointer transition-colors">
            <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                <span className="text-xs font-medium font-mono text-zinc-300">MR</span>
            </div>
            <div>
                <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">Michal Rucký</p>
                <p className="text-xs text-zinc-500">UlovDomov.cz</p>
            </div>
        </div>
      </div>
    </div>
  )
}
