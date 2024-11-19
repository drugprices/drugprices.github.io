'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Star } from 'lucide-react'

export default function Page() {
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProviders() {
      try {
        const response = await fetch('/api/providers')
        const data = await response.json()
        setProviders(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching providers:', error)
        setLoading(false)
      }
    }

    fetchProviders()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-blue-600">MedCost Compass</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"> {/* Increased padding */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Find Affordable Healthcare Services Near You
            </h2>
            <div className="mt-8 flex gap-4 justify-center">
              <Input
                className="flex-grow max-w-md"
                placeholder="What procedure or service do you need?"
                type="search"
              />
              <Button>Search</Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Healthcare Providers</h2>
            {loading ? (
              <p>Loading providers...</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {providers.map((provider) => (
                  <Card key={provider.id}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold">{provider.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" /> {provider.distance} miles away
                      </p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" /> Est. wait time: {provider.waitTime}
                      </p>
                      <p className="text-lg font-bold text-green-600 flex items-center mt-2">
                        <DollarSign className="w-5 h-5 mr-1" /> {provider.priceRange}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Insurance coverage: {provider.insuranceCoverage}</p>
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{provider.rating} ({provider.reviewCount} reviews)</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MedCost Compass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
