"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import adoptablesData from "@/data/adoptables.json";

type Pet = typeof adoptablesData[0];

const filterOptions = {
  size: ["Small", "Medium", "Large"],
  sex: ["Male", "Female"],
  urgency: ["High", "Medium", "Low"],
  breed: Array.from(new Set(adoptablesData.map(pet => pet.breed))).sort()
};

export default function Adoptables() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    size: [],
    sex: [],
    urgency: [],
    breed: []
  });
  const [sortBy, setSortBy] = useState<"newest" | "urgency">("urgency");

  const filteredPets = useMemo(() => {
    const filtered = adoptablesData.filter((pet) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          pet.name.toLowerCase().includes(searchLower) ||
          pet.breed.toLowerCase().includes(searchLower) ||
          pet.temperament.some(t => t.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filters
      for (const [category, selectedValues] of Object.entries(activeFilters)) {
        if (selectedValues.length > 0) {
          const petValue = pet[category as keyof Pet];
          if (Array.isArray(petValue)) {
            // For temperament array
            if (!petValue.some(v => selectedValues.includes(v))) return false;
          } else {
            // For single values
            if (!selectedValues.includes(petValue as string)) return false;
          }
        }
      }

      return true;
    });

    // Sort
    if (sortBy === "urgency") {
      const urgencyOrder = { "High": 0, "Medium": 1, "Low": 2 };
      filtered.sort((a, b) => urgencyOrder[a.urgency as keyof typeof urgencyOrder] - urgencyOrder[b.urgency as keyof typeof urgencyOrder]);
    } else {
      // Sort by newest (using ID as proxy)
      filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    return filtered;
  }, [searchTerm, activeFilters, sortBy]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      size: [],
      sex: [],
      urgency: [],
      breed: []
    });
    setSearchTerm("");
  };

  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0) || searchTerm;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">
              Pets in Need of Foster Homes
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              These amazing pets are waiting for temporary homes while they find their forever families. 
              Can you help one of them?
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-ink-muted" />
                <Input
                  type="text"
                  placeholder="Search by name, breed, or temperament..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="space-y-4">
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-sm font-medium text-ink capitalize">{category} Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleFilter(category, option)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          activeFilters[category].includes(option)
                            ? "bg-brand text-white"
                            : "bg-bg-subtle text-ink-muted hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sort and Clear */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-ink">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "newest" | "urgency")}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="urgency">Urgency</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              
              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="text-sm">
                  Clear all filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-bg-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <p className="text-ink-muted">
                Showing {filteredPets.length} of {adoptablesData.length} pets
              </p>
            </div>

            {filteredPets.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 bg-bg-subtle rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-ink-muted" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">No pets found</h3>
                  <p className="text-ink-muted mb-4">
                    Try adjusting your search or filter criteria.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPets.map((pet) => (
                  <Card key={pet.id} className="overflow-hidden hover:shadow-medium transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-brand/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft">
                          <Heart className="h-8 w-8 text-brand" />
                        </div>
                        <p className="text-ink-muted text-sm">Photo of {pet.name}</p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-ink">{pet.name}</h3>
                        <Badge 
                          variant={pet.urgency === "High" ? "warn" : pet.urgency === "Medium" ? "accent" : "secondary"}
                        >
                          {pet.urgency}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-ink-muted mb-4">
                        <p><strong>Age:</strong> {pet.age}</p>
                        <p><strong>Breed:</strong> {pet.breed}</p>
                        <p><strong>Size:</strong> {pet.size}</p>
                        <p><strong>Sex:</strong> {pet.sex}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {pet.temperament.map((trait, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-ink text-sm mb-4 line-clamp-3">
                        {pet.description}
                      </p>
                      
                      <Button asChild className="w-full">
                        <Link href={`/apply-to-foster?petId=${pet.id}`}>
                          Foster {pet.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Don&apos;t See the Perfect Match?</h2>
            <p className="text-xl opacity-90">
              New pets arrive regularly. Sign up to be notified when pets matching your preferences become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="text-lg">
                <Link href="/apply-to-foster">
                  Become a Foster
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white text-white hover:bg-white hover:text-brand">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
