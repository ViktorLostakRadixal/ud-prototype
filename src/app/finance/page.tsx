import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { DollarSign, TrendingUp, CreditCard } from "lucide-react"

export default function FinancePage() {
  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Finance</h1>
        
        <div className="grid grid-cols-3 gap-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Příjmy tento měsíc</CardTitle>
                    <DollarSign className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-emerald-400">+ 854 000 Kč</div>
                    <p className="text-xs text-zinc-500">+20.1% oproti minulému měsíci</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Nezaplacené faktury</CardTitle>
                    <CreditCard className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-red-400">32 500 Kč</div>
                    <p className="text-xs text-zinc-500">2 nájemníci po splatnosti</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Provozní zisk (EBITDA)</CardTitle>
                    <TrendingUp className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-white">4 250 000 Kč</div>
                    <p className="text-xs text-zinc-500">YTD 2024</p>
                </CardContent>
            </Card>
        </div>

        <Card className="h-96 flex items-center justify-center border-dashed border-zinc-800 bg-zinc-900/20">
            <div className="text-center text-zinc-500">
                <p>Zde by byl podrobný graf cashflow (integrováno z banky).</p>
            </div>
        </Card>
    </div>
  )
}
