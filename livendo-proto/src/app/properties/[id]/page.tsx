import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { StatCard } from "@/components/ui/StatCard"
import { MapPin, Home, Maximize2, FileText, Download, Share2, Printer, Calendar } from "lucide-react"
import Link from "next/link"

export default function PropertyDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
            <div className="space-y-1">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Rezidence Křižíkova, Byt A204</h1>
                    <Badge variant="default" className="text-sm px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">VOLNÉ K PRONÁJMU</Badge>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin className="h-4 w-4 text-indigo-400" />
                    <span>Křižíkova 123/45, 186 00 Praha 8 - Karlín</span>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors flex items-center gap-2">
                    <Printer className="h-4 w-4" /> Tisk karty
                </button>
                <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/50">
                    <Share2 className="h-4 w-4" /> Sdílet nabídku
                </button>
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl border border-zinc-800 cursor-pointer">
                {/* Simulated Image Placeholder with nice gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                     <span className="text-6xl font-thin tracking-widest opacity-20">LIVING ROOM</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white font-medium">Obývací pokoj s kuchyní</span>
                </div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-zinc-800 cursor-pointer">
                 <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-bold">BEDROOM</div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-zinc-800 cursor-pointer">
                 <div className="absolute inset-0 bg-stone-800 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-bold">BATH</div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-zinc-800 cursor-pointer">
                 <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-bold">TERRACE</div>  
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border border-zinc-800 cursor-pointer flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors">
                <span className="text-zinc-400 font-medium flex items-center gap-2">
                    <Maximize2 className="h-5 w-5" />
                    +12 fotek
                </span>
            </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Details & Docs */}
            <div className="col-span-8 space-y-6">
                
                {/* Property Specs */}
                <Card>
                    <CardHeader>
                        <CardTitle>Parametry nemovitosti</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">Dispozice</span>
                            <span className="text-xl font-semibold">2+kk</span>
                        </div>
                         <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">Plocha</span>
                            <span className="text-xl font-semibold">64 m²</span>
                        </div>
                         <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">Patro</span>
                            <span className="text-xl font-semibold">4. NP</span>
                        </div>
                         <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">Cena nájmu</span>
                            <span className="text-xl font-semibold text-emerald-400">22.500 Kč</span>
                        </div>
                         <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">Poplatky</span>
                            <span className="text-xl font-semibold">4.500 Kč</span>
                        </div>
                         <div className="flex flex-col gap-1 p-3 rounded-lg bg-zinc-900/50">
                            <span className="text-zinc-500 text-sm">K dispozici od</span>
                            <span className="text-xl font-semibold">Ihned</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Description */}
                <Card>
                    <CardHeader>
                        <CardTitle>Popis</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-invert max-w-none text-zinc-300">
                        <p>
                            Nabízíme k pronájmu luxusní byt 2+kk v srdci Karlína. Byt prošel kompletní rekonstrukcí v roce 2024 a nabízí moderní bydlení pro náročné klienty. 
                            Interiér navržený architektem kombinuje původní industriální prvky s moderním minimalismem.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Plně vybavená kuchyňská linka se spotřebiči Miele</li>
                            <li>Klimatizace ve všech místnostech</li>
                            <li>Chytrá domácnost (světla, topení, žaluzie) - Loxone</li>
                            <li>Vysokorychlostní optický internet v ceně</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Documentation */}
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                             <FileText className="h-5 w-5 text-indigo-400" />
                             Dokumentace & Smlouvy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {[
                            { name: "Půdorys bytu.pdf", size: "2.4 MB", type: "PDF" },
                            { name: "Energetický štítek (PENB).pdf", size: "1.2 MB", type: "PDF" },
                            { name: "Vzor nájemní smlouvy 2025.docx", size: "0.5 MB", type: "DOCX" },
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors">{doc.name}</div>
                                        <div className="text-xs text-zinc-500">{doc.type} • {doc.size}</div>
                                    </div>
                                </div>
                                <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                                    <Download className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Map & Viewing */}
            <div className="col-span-4 space-y-6">
                 {/* Map Widget */}
                 <Card className="overflow-hidden p-0 border-0">
                    <div className="bg-zinc-800 h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Simulated Map UI */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.846418826644!2d14.4510!3d50.0910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA1JzI3LjYiTiAxNMKwMjcnMDMuNiJF!5e0!3m2!1sen!2scz!4v1620000000000!5m2!1sen!2scz" 
                            width="100%" 
                            height="100%" 
                            loading="lazy" 
                            className="opacity-70 contrast-125"
                        ></iframe>
                    </div>
                    <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                        <div className="font-medium">Lokace: Karlín</div>
                        <div className="text-sm text-zinc-500">3 minuty na Metro B (Křižíkova)</div>
                    </div>
                 </Card>

                 {/* Viewing Calendar Widget */}
                 <Card className="bg-gradient-to-br from-indigo-900/20 to-zinc-900/50 border-indigo-500/30">
                    <CardHeader>
                        <CardTitle className="text-lg">Sjednat prohlídku</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-sm text-zinc-400">Vyberte preferovaný termín pro osobní prohlídku.</div>
                        <div className="grid grid-cols-3 gap-2">
                             {["Po 14.10", "Út 15.10", "St 16.10"].map((day, i) => (
                                 <div key={i} className={`p-2 rounded-lg border text-center cursor-pointer text-sm ${i === 1 ? 'border-indigo-500 bg-indigo-500/20 text-white' : 'border-zinc-700 hover:border-zinc-500 text-zinc-400'}`}>
                                     {day}
                                 </div>
                             ))}
                        </div>
                        <button className="w-full py-3 mt-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                            Potvrdit termín
                        </button>
                         <p className="text-xs text-center text-zinc-500 mt-2">
                            Nebo využijte chat asistenta pro rychlejší dohodu.
                        </p>
                    </CardContent>
                 </Card>
            </div>
        </div>
    </div>
  )
}
