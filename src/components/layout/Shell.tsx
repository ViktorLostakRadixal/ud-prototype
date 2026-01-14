import { Sidebar } from "./Sidebar"
import { TopBar } from "./TopBar"
import { ChatWidget } from "./ChatWidget"

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30 relative">
      <Sidebar />
      <div className="pl-64 flex flex-col min-h-screen transition-all duration-300">
        <TopBar />
        <main className="flex-1 py-8 px-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
                {children}
            </div>
        </main>
      </div>
      <ChatWidget />
    </div>
  )
}
