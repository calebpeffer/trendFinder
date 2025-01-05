'use client'

import { SettingsForm } from "@/components/settings-form"

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">TrendFinder UI</h1>
          <p className="text-sm text-muted-foreground">
            Sponsored by Firecrawl.dev 🔥
          </p>
        </div>
        <SettingsForm />
      </div>
    </main>
  )
}