import { StatCard } from "@/components/ui/StatCard"
import { EventStream } from "@/components/ui/EventStream"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight, Building, Users, Wallet } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Command Center</h1>
        <p className="text-zinc-400">Přehled operativy a finančního zdraví portfolia.</p>
      </div>

      {/* KPI Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
            title="Celkové MRR" 
            value="4,250,000 Kč" 
            trend="up" 
            trendValue="+12.5%" 
            description="oproti minulému měsíci"
            icon={<Wallet className="h-4 w-4" />}
        />
        <StatCard 
            title="Obsazenost" 
            value="98.2%" 
            trend="up" 
            trendValue="+0.4%" 
            description="49 volných jednotek"
            icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
            title="Aktivní údržba" 
            value="12" 
            trend="down" 
            trendValue="-2" 
            description="otevřených ticketů"
            icon={<Building className="h-4 w-4" />}
        />
        <StatCard 
            title="Klientská spokojenost" 
            value="4.8/5" 
            trend="neutral" 
            trendValue="stabilní" 
            description="NPS Score"
            icon={<Users className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 h-[600px]">
        
        {/* Main Action Area (Left - 4 cols) */}
        <div className="col-span-4 flex flex-col gap-6">
            
            {/* Quick Actions / Tasks */}
            <Card className="flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Building className="w-64 h-64 -mr-16 -mt-16 text-indigo-500" />
                </div>

                <CardHeader>
                    <CardTitle>Vyžaduje pozornost</CardTitle>
                    <CardDescription>3 kritické úkoly pro dnešní den</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[
                        { title: "Schválení vyúčtování energií", sub: "Rezidence Křižíkova • 42 bytů", tag: "Finance", urgent: true },
                        { title: "Podpis nové nájemní smlouvy", sub: "Byt A204 • Petr Svoboda", tag: "Legal", urgent: false },
                        { title: "Revize požárních hlásičů", sub: "Všechny objekty • Termín: 15.10.", tag: "Maintenance", urgent: false },
                    ].map((task, i) => (
                        <div key={i} className="group relative flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/50 transition-all cursor-pointer">
                            <div className="space-y-1">
                                <p className="font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors">{task.title}</p>
                                <p className="text-sm text-zinc-500">{task.sub}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                {task.urgent && <Badge variant="destructive">Urgentní</Badge>}
                                <Badge variant="secondary">{task.tag}</Badge>
                                <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                    
                    <button className="w-full mt-4 py-3 rounded-lg border border-dashed border-zinc-700 text-sm text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/50 transition-all">
                        + Přidat nový úkol
                    </button>
                </CardContent>
            </Card>

            {/* Micro-chart placeholder area */}
            <div className="grid grid-cols-2 gap-6 h-48">
                 <Card className="p-6 flex flex-col justify-between group cursor-pointer hover:border-indigo-500/30">
                    <div>
                        <div className="text-zinc-500 text-sm font-medium mb-1">Vývoj nájemného (YTD)</div>
                        <div className="text-2xl font-bold text-white mb-2">+ 8.4%</div>
                    </div>
                    {/* Fake Chart Bars */}
                    <div className="flex items-end gap-1 h-16 opacity-50 group-hover:opacity-80 transition-opacity">
                        {[40, 65, 50, 80, 55, 90, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                 </Card>
                 
                 <Card className="p-6 flex flex-col justify-between bg-indigo-600 border-indigo-500 relative overflow-hidden group cursor-pointer">
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                     <div className="relative z-10">
                        <div className="text-indigo-200 text-sm font-medium mb-1">Livendo AI Insights</div>
                        <div className="text-xl font-bold text-white mb-4">Navrhuji zvýšení záloh na energie o 15% u 12 objektů.</div>
                     </div>
                     <div className="relative z-10 flex items-center text-sm font-medium text-white hover:underline">
                        Zobrazit analýzu <ArrowRight className="ml-2 h-4 w-4" />
                     </div>
                 </Card>
            </div>
        </div>

        {/* Live Event Stream (Right - 3 cols) */}
        <div className="col-span-3 h-full">
            <EventStream />
        </div>
      </div>
      
      {/* Integrations Status Bar */}
      <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="col-span-1 p-4 rounded-xl border border-dashed border-zinc-800 flex items-center justify-between text-zinc-500">
                <span className="text-xs uppercase tracking-wider">Bank API</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-500">Connected</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
            </div>
             <div className="col-span-1 p-4 rounded-xl border border-dashed border-zinc-800 flex items-center justify-between text-zinc-500">
                <span className="text-xs uppercase tracking-wider">Katastr (RUIAN)</span>
                 <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-500">Synced 2m ago</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
            </div>
             <div className="col-span-1 p-4 rounded-xl border border-dashed border-zinc-800 flex items-center justify-between text-zinc-500">
                <span className="text-xs uppercase tracking-wider">Homey App</span>
                 <div className="flex items-center gap-2">
                    <span className="text-xs text-indigo-400">Live Traffic</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping"></div>
                </div>
            </div>
             <div className="col-span-1 p-4 rounded-xl border border-dashed border-zinc-800 flex items-center justify-between text-zinc-500">
                <span className="text-xs uppercase tracking-wider">Měřáky (IoT)</span>
                 <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">Connecting...</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                </div>
            </div>
      </div>
    </>
  )
}
