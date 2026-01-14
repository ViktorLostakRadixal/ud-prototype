"use client"

import { Search, Command } from "lucide-react"

export function UniversalSearch() {
  return (
    <div className="relative w-full max-w-md group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-12 py-2 border border-zinc-800 rounded-lg leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all shadow-sm"
        placeholder="Hledat cokoliv (Ctrl+K)..."
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <kbd className="inline-flex items-center border border-zinc-700 rounded px-2 text-xs font-sans font-medium text-zinc-500">
          <Command className="h-3 w-3 mr-1" />K
        </kbd>
      </div>
    </div>
  )
}
