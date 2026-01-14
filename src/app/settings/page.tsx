"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Key, Server, Save, RotateCw, CheckCircle2, AlertCircle } from "lucide-react"

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("")
  const [serverStatus, setServerStatus] = useState<"checking" | "online" | "error">("checking")
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    // Load saved key from local storage
    const savedKey = localStorage.getItem("livendo_gemini_key")
    if (savedKey) setApiKey(savedKey)
    checkServer()
  }, [])

  const checkServer = async () => {
    setServerStatus("checking")
    try {
      // Simple ping to check if API route exists and responds (even with 400 it means route is up)
      const res = await fetch("/api/chat", { 
        method: "POST", 
        body: JSON.stringify({ message: "Ping", history: [] }) 
      })
      if (res.status === 500 || res.status === 404) throw new Error("Server Error")
      setServerStatus("online")
    } catch (e) {
      setServerStatus("error")
    }
  }

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem("livendo_gemini_key", apiKey.trim())
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 2000)
    } else {
        localStorage.removeItem("livendo_gemini_key")
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-white glow-text">Nastavení Systému</h1>

        {/* Server Status */}
        <Card className={serverStatus === 'online' ? "border-emerald-500/30 bg-emerald-900/10" : "border-red-500/30 bg-red-900/10"}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Server className="h-5 w-5" />
                    Stav API Serveru
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${serverStatus === 'online' ? 'bg-emerald-500 animate-pulse' : serverStatus === 'checking' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                        <span className="text-zinc-200 font-medium">
                            {serverStatus === 'online' ? 'Systém je online' : serverStatus === 'checking' ? 'Ověřuji dostupnost...' : 'Chyba připojení'}
                        </span>
                    </div>
                    <button onClick={checkServer} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <RotateCw className={`h-4 w-4 text-zinc-400 ${serverStatus === 'checking' ? 'animate-spin' : ''}`} />
                    </button>
                </div>
                {serverStatus === 'error' && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                         Nelze se spojit s /api/chat. Zkontrolujte logy na Vercelu.
                    </p>
                )}
            </CardContent>
        </Card>

        {/* API Key Config */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Key className="h-5 w-5 text-indigo-400" />
                    Konfigurace AI (Gemini)
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
                    <p>
                        Aplikace primárně používá klíč z proměnné prostředí (<code>GEMINI_API_KEY</code>).
                        Pokud není na serveru nastaven, můžete ho zadat zde (uloží se pouze do vašeho prohlížeče).
                    </p>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Váš API Klíč</label>
                    <div className="flex gap-2">
                        <input 
                            type="password" 
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="AIzaSy..."
                            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                        <button 
                            onClick={handleSave}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            {isSaved ? <CheckCircle2 className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                            {isSaved ? "Uloženo" : "Uložit"}
                        </button>
                    </div>
                    <p className="text-xs text-zinc-500">
                        Klíč se použije pro všechny chatové požadavky z tohoto zařízení.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
