import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Users, Mail, Phone, FileCheck } from "lucide-react"

const TENANTS = [
    { name: "Jan Novák", unit: "Byt A204", status: "Active", contact: "jan.novak@example.com" },
    { name: "Petra Svobodová", unit: "Byt B105", status: "Active", contact: "petra.sv@example.com" },
    { name: "Martin Dvořák", unit: "Kancelář D101", status: "Notice", contact: "dvorak@firma.cz" },
]

export default function TenantsPage() {
  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Nájemníci</h1>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">+ Nový nájemník</button>
        </div>

        <div className="grid gap-4">
            {TENANTS.map((tenant, i) => (
                <Card key={i} className="hover:bg-zinc-900/50 transition-colors">
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                                <Users className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="font-semibold text-white">{tenant.name}</div>
                                <div className="text-sm text-zinc-500">{tenant.unit}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-zinc-400">
                            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {tenant.contact}</div>
                            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +420 777 123 456</div>
                        </div>
                        <Badge variant={tenant.status === 'Active' ? 'success' : 'warning'}>{tenant.status}</Badge>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
