"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
// import ReactMarkdown from "react-markdown" // temporarily removed to avoid build complexity if package not ready, using simple text for now

interface Message {
  role: "user" | "model"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Dobrý den, jsem váš virtuální asistent Livendo. Jak vám mohu dnes pomoci s pronájmem?" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-open chat after 5 seconds to demonstrate proactivity
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsOpen(true)
      }, 5000)
      return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const clientApiKey = localStorage.getItem("livendo_gemini_key")
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({ role: m.role, content: m.content })),
          apiKey: clientApiKey // Send optional client override
        })
      })

      if (!response.ok) throw new Error("Network response was not ok")
      
      const data = await response.json()
      setMessages(prev => [...prev, { role: "model", content: data.reply }])
    } catch (error) {
        console.error(error)
      setMessages(prev => [...prev, { role: "model", content: "Omlouvám se, ale momentálně se nemohu spojit se serverem." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-8 w-96 max-h-[600px] h-[500px] bg-zinc-950/90 backdrop-blur-xl border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col z-[100] overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-indigo-600/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-white">Livendo Assistant</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
                        <div className={cn(
                            "h-8 w-8 rounded-full flex items-center justify-center shrink-0 border border-white/10",
                            msg.role === "model" ? "bg-indigo-600" : "bg-zinc-700"
                        )}>
                            {msg.role === "model" ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-white" />}
                        </div>
                        <div className={cn(
                            "rounded-2xl px-4 py-2 text-sm max-w-[80%]",
                            msg.role === "model" ? "bg-zinc-800 text-zinc-100 rounded-tl-none" : "bg-indigo-600 text-white rounded-tr-none"
                        )}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 border border-white/10">
                            <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-2 flex gap-1 items-center">
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-zinc-900/50">
                <div className="relative">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Napište zprávu..."
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button type="submit" disabled={isLoading} className="absolute right-2 top-2 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors">
                        <Send className="h-4 w-4" />
                    </button>
                </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 h-14 w-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-900/50 flex items-center justify-center z-[100] transition-colors border border-indigo-400/50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </>
  )
}
