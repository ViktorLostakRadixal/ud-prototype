import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Home, FileText, CreditCard, Wrench, CheckCircle2, ArrowRight } from "lucide-react"

export default function ClientPortal() {
  return (
    <div className="space-y-8">
        {/* Client Header */}
        <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <Home className="h-8 w-8 text-indigo-500" />
                Můj Domov
            </h1>
            <p className="text-zinc-400">Vítejte doma, pane Nováku. Vše vypadá v pořádku.</p>
        </div>

        {/* Status Hero */}
        <Card className="bg-gradient-to-r from-emerald-900/20 to-zinc-900 border-emerald-500/20">
            <CardContent className="flex items-center justify-between p-8">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Nájemné na Říjen je uhrazeno</h2>
                    <p className="text-emerald-400 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Děkujeme za včasnou platbu.
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-white">22 500 Kč</div>
                    <div className="text-sm text-zinc-500">Další splatnost: 15.11.2025</div>
                </div>
            </CardContent>
        </Card>

        {/* Action Grid */}
        <div className="grid grid-cols-3 gap-6">
             <Card className="hover:bg-zinc-900/50 cursor-pointer group transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-indigo-400" />
                        Dokumenty
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-zinc-500 mb-4">Nájemní smlouva, předávací protokol a vyúčtování na jednom místě.</p>
                    <span className="text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Otevřít archiv <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                </CardContent>
             </Card>

             <Card className="hover:bg-zinc-900/50 cursor-pointer group transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-amber-400" />
                        Nahlásit závadou
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-zinc-500 mb-4">Něco nefunguje? Vyfoťte to a my pošleme technika.</p>
                    <span className="text-sm font-medium text-amber-500 group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Vytvořit tiket <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                </CardContent>
             </Card>

             <Card className="hover:bg-zinc-900/50 cursor-pointer group transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-blue-400" />
                        Platby a služby
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-zinc-500 mb-4">Přehled záloh na energie a historie plateb.</p>
                    <span className="text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Zobrazit historii <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                </CardContent>
             </Card>
        </div>

        {/* Notices */}
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Nástěnka domu</h3>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start gap-4">
                 <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                 <div>
                     <p className="text-sm text-zinc-200">Plánovaná odstávka vody</p>
                     <p className="text-xs text-zinc-500 mt-1">Z důvodu opravy hlavního přívodu nepoteče voda ve středu 20.10. od 8:00 do 12:00.</p>
                 </div>
            </div>
        </div>
    </div>
  )
}
