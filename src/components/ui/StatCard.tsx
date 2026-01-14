import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
    title: string
    value: string
    trend?: "up" | "down" | "neutral"
    trendValue?: string
    description?: string
    icon?: React.ReactNode
}

export function StatCard({ title, value, trend, trendValue, description, icon }: StatCardProps) {
    return (
        <Card className="hover:border-indigo-500/50 transition-colors duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                    {title}
                </CardTitle>
                {icon && <div className="text-zinc-500">{icon}</div>}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {(trend || description) && (
                    <div className="flex items-center text-xs text-zinc-500 mt-1">
                        {trend === "up" && <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />}
                        {trend === "down" && <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />}
                        {trend === "neutral" && <Minus className="mr-1 h-3 w-3 text-zinc-500" />}
                        
                        {trendValue && (
                            <span className={cn(
                                "font-medium mr-2",
                                trend === "up" && "text-emerald-500",
                                trend === "down" && "text-red-500",
                            )}>
                                {trendValue}
                            </span>
                        )}
                        {description && <span>{description}</span>}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
