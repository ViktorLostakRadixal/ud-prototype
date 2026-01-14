"use client"

import { Bell } from "lucide-react"
import { UniversalSearch } from "@/components/ui/UniversalSearch"

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 flex h-16 items-center gap-x-4 px-6 shadow-sm">
        
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
            <UniversalSearch />
            
            <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
                
                {/* Notification Bell */}
                <button type="button" className="relative -m-2.5 p-2.5 text-zinc-400 hover:text-white transition-colors">
                    <span className="sr-only">Zobrazit upozornění</span>
                    <Bell className="h-5 w-5" aria-hidden="true" />
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-zinc-950 animate-pulse"></span>
                </button>
                
                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-white/10" aria-hidden="true" />
                
                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-zinc-500">SYSTEM ONLINE</span>
                </div>
            </div>
        </div>
    </header>
  )
}
