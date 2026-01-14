"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { FileText, DollarSign, Wrench, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react"

type EventType = "contract" | "payment" | "maintenance" | "tenant" | "system"

interface SystemEvent {
    id: string
    type: EventType
    message: string
    timestamp: Date
    metadata?: string
}

const MOCK_EVENTS: SystemEvent[] = [
    { id: "1", type: "contract", message: "Nájemní smlouva podepsána (byt A204)", timestamp: new Date(), metadata: "Jan Novák" },
    { id: "2", type: "payment", message: "Nájem uhrazen - 15,400 Kč", timestamp: new Date(), metadata: "VS: 2023001" },
    { id: "3", type: "maintenance", message: "Nový požadavek: Kapající kohoutek", timestamp: new Date(), metadata: "Priorita: Nízká" },
    { id: "4", type: "tenant", message: "Nový zájemce o prohlídku", timestamp: new Date(), metadata: "Rezidence Křižíkova" },
    { id: "5", type: "system", message: "Automatická synchronizace katastru", timestamp: new Date(), metadata: "Úspěšně dokončeno" },
]

const getIcon = (type: EventType) => {
    switch (type) {
        case "contract": return <FileText className="h-4 w-4 text-indigo-400" />
        case "payment": return <DollarSign className="h-4 w-4 text-emerald-400" />
        case "maintenance": return <Wrench className="h-4 w-4 text-amber-400" />
        case "tenant": return <UserPlus className="h-4 w-4 text-blue-400" />
        case "system": return <CheckCircle2 className="h-4 w-4 text-zinc-400" />
        default: return <AlertCircle className="h-4 w-4 text-zinc-400" />
    }
}

export function EventStream() {
    const [events, setEvents] = useState<SystemEvent[]>(MOCK_EVENTS)

    // Simulate real-time events
    useEffect(() => {
        const interval = setInterval(() => {
            const newEvent: SystemEvent = {
                id: Math.random().toString(36).substr(2, 9),
                type: ["contract", "payment", "maintenance", "tenant", "system"][Math.floor(Math.random() * 5)] as EventType,
                message: `Simulovaná událost #${Math.floor(Math.random() * 1000)}`,
                timestamp: new Date(),
                metadata: "Nový záznam"
            }
            
            setEvents(prev => [newEvent, ...prev].slice(0, 10)) // Keep last 10
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <Card className="h-full flex flex-col bg-zinc-900/30 border-zinc-800">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live Event Stream
                    </CardTitle>
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider text-zinc-500">
                        Event Sourcing
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 p-6 pt-0 overflow-y-auto space-y-4 scrollbar-hide mask-fade-bottom">
                    <AnimatePresence initial={false}>
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20, height: 0 }}
                                animate={{ opacity: 1, x: 0, height: "auto" }}
                                exit={{ opacity: 0, x: 20, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex gap-3 pb-3 border-b border-white/5 last:border-0"
                            >
                                <div className="mt-1 p-1.5 rounded-full bg-white/5 border border-white/5 h-fit">
                                    {getIcon(event.type)}
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium text-zinc-200">{event.message}</p>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <span>{event.timestamp.toLocaleTimeString()}</span>
                                        <span>•</span>
                                        <span>{event.metadata}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    )
}
