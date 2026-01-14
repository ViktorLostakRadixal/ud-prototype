import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Building2, MapPin, ArrowRight, BedDouble, Bath, Square } from "lucide-react"

const PROPERTIES = [
    {
        id: "A204",
        title: "Rezidence Křižíkova, Byt A204",
        address: "Křižíkova 123/45, Praha 8",
        price: "22 500 Kč",
        status: "active",
        specs: { beds: "2+kk", bath: "1", size: "64 m²" },
        image: "bg-zinc-800" // Placeholder gradient
    },
    {
        id: "B105",
        title: "Loft Palmovka, Byt B105",
        address: "Sokolovská 88, Praha 8",
        price: "18 900 Kč",
        status: "occupied",
        specs: { beds: "1+kk", bath: "1", size: "42 m²" },
        image: "bg-zinc-800"
    },
    {
        id: "C303",
        title: "Vila Vinohrady, Apartmán C303",
        address: "Mánesova 22, Praha 2",
        price: "35 000 Kč",
        status: "maintenance",
        specs: { beds: "3+1", bath: "2", size: "98 m²" },
        image: "bg-zinc-800"
    },
    {
        id: "D101",
        title: "Kanceláře Anděl, Unit D101",
        address: "Plzeňská 5, Praha 5",
        price: "45 000 Kč",
        status: "active",
        specs: { beds: "Office", bath: "1", size: "110 m²" },
        image: "bg-zinc-800"
    }
]

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Správa Nemovitostí</h1>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-lg shadow-indigo-900/50">
                + Přidat nemovitost
            </button>
        </div>

        {/* Filter Bar Placeholder */}
        <div className="flex gap-2 pb-4 overflow-x-auto">
            {["Vše", "Volné", "Obsazené", "V rekonstrukci", "Komerční"].map((filter, i) => (
                <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${i===0 ? "bg-white text-zinc-950 border-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"}`}>
                    {filter}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROPERTIES.map((property) => (
                <Link href={`/properties/${property.id}`} key={property.id} className="group">
                    <Card className="h-full hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group-hover:bg-zinc-900/80">
                        {/* Image Area */}
                        <div className={`h-48 ${property.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                            <div className="absolute top-4 right-4">
                                <Badge variant={property.status === 'active' ? 'default' : property.status === 'occupied' ? 'secondary' : 'warning'}>
                                    {property.status === 'active' ? 'VOLNÉ' : property.status === 'occupied' ? 'OBSAZENO' : 'ÚDRŽBA'}
                                </Badge>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Building2 className="h-12 w-12 text-zinc-700 group-hover:text-indigo-500/50 transition-colors duration-500" />
                            </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg group-hover:text-indigo-400 transition-colors truncate">{property.title}</CardTitle>
                            <div className="flex items-center gap-1 text-sm text-zinc-500">
                                <MapPin className="h-3 w-3" />
                                <span className="truncate">{property.address}</span>
                            </div>
                        </CardHeader>
                        
                        <CardContent className="pb-2">
                             <div className="flex items-center justify-between py-2 border-t border-zinc-800/50 border-b mb-2">
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <span className="flex items-center gap-1"><BedDouble className="h-3 w-3" /> {property.specs.beds}</span>
                                    <span className="flex items-center gap-1"><Square className="h-3 w-3" /> {property.specs.size}</span>
                                </div>
                             </div>
                             <div className="font-bold text-lg text-white">{property.price} <span className="text-xs font-normal text-zinc-500">/ měs</span></div>
                        </CardContent>

                        <CardFooter className="pt-2">
                            <div className="w-full flex items-center justify-end text-sm font-medium text-indigo-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                Detail karty <ArrowRight className="ml-1 h-3 w-3" />
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  )
}
