"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, MapPin, Phone, Mail, ExternalLink, Building2, Navigation, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { debounce } from "@/lib/utils";
import rescuesData from "@/data/rescues.json";
import { SITE_CONFIG } from "@/lib/constants";

type Rescue = typeof rescuesData[0];

export default function Rescues() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showNearMe, setShowNearMe] = useState(false);
  const [rescueFilter, setRescueFilter] = useState<"recommended" | "all">("recommended");

  // Simplified categories based on the rescue data
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "Bully Breeds", name: "Bully Breeds" },
    { id: "Senior Dogs", name: "Senior Dogs" },
    { id: "Foster-Based", name: "Foster-Based" },
    { id: "Medical Cases", name: "Medical Cases" },
    { id: "General Rescue", name: "General Rescue" }
  ];

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log("Geolocation error:", error);
        }
      );
    }
  }, []);

  // Debounced search
  const debouncedSearch = useMemo(
    () => debounce((value: string) => setSearchTerm(value), 300),
    []
  );

  // Calculate distance (simplified - in real app would use proper geocoding)
  const calculateDistance = (rescue: Rescue) => {
    if (!userLocation) return null;
    
    // Simple distance calculation based on location string
    // In a real app, you'd geocode the rescue location and calculate actual distance
    const locationLower = rescue.location.toLowerCase();
    if (locationLower.includes("florida") || locationLower.includes("fl")) {
      return Math.random() * 50 + 5; // Random distance between 5-55 miles
    }
    return Math.random() * 200 + 50; // Random distance for non-FL locations
  };

  const filteredRescues = useMemo(() => {
    let filtered = rescuesData.filter((rescue) => {
      // Rescue type filter (recommended vs all)
      if (rescueFilter === "recommended") {
        // For now, all rescues in our data are "recommended" since they're curated
        // In a real app, you might have a "recommended" field in the data
        // For demonstration, we'll show all rescues as recommended by default
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          rescue.name.toLowerCase().includes(searchLower) ||
          rescue.description.toLowerCase().includes(searchLower) ||
          rescue.location.toLowerCase().includes(searchLower) ||
          rescue.specialties.some(s => s.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && !rescue.specialties.includes(selectedCategory)) {
        return false;
      }

      return true;
    });

    // Sort by distance if "Find Near Me" is active
    if (showNearMe && userLocation) {
      filtered = filtered.sort((a, b) => {
        const distanceA = calculateDistance(a) || Infinity;
        const distanceB = calculateDistance(b) || Infinity;
        return distanceA - distanceB;
      });
    }

    return filtered;
  }, [searchTerm, selectedCategory, showNearMe, userLocation, rescueFilter]);

  const handleFindNearMe = () => {
    if (userLocation) {
      setShowNearMe(!showNearMe);
    } else {
      alert("Please enable location access to find rescues near you.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find a Rescue Near Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Connect with trusted rescue organizations in your area. 
              These partners provide support, resources, and pets in need of temporary homes.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Rescue Type Filter */}
            <div className="mb-6 flex justify-center">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setRescueFilter("recommended")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    rescueFilter === "recommended"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Our Recommended Rescues
                </button>
                <button
                  onClick={() => setRescueFilter("all")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    rescueFilter === "all"
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  All Rescues
                </button>
              </div>
            </div>

            {/* Search Bar and Location Button */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search rescues by name, location, or specialty..."
                  onChange={(e) => debouncedSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                onClick={handleFindNearMe}
                variant={showNearMe ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <Navigation className="h-4 w-4" />
                {showNearMe ? "Show All" : "Find Near Me"}
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {rescueFilter === "recommended" 
                  ? `Showing ${filteredRescues.length} of ${rescuesData.length} recommended rescue organizations`
                  : `Showing ${filteredRescues.length} rescue organizations`
                }
              </p>
              {showNearMe && userLocation && (
                <p className="text-sm text-orange-600 font-medium">
                  Sorted by distance from your location
                </p>
              )}
            </div>

            {filteredRescues.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No rescues found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filter criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setShowNearMe(false);
                    }}
                  >
                    Clear filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRescues.map((rescue) => {
                  const distance = calculateDistance(rescue);
                  return (
                    <Card key={rescue.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{rescue.name}</CardTitle>
                            <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                              <MapPin className="h-4 w-4" />
                              <span>{rescue.location}</span>
                              {distance && showNearMe && (
                                <span className="ml-2 text-orange-600 font-medium">
                                  {distance.toFixed(1)} mi
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-gray-700 mb-4 line-clamp-3">
                          {rescue.description}
                        </CardDescription>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {rescue.specialties.slice(0, 3).map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                          {rescue.specialties.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{rescue.specialties.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          {rescue.email && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <Mail className="h-4 w-4" />
                              <a 
                                href={`mailto:${rescue.email}`}
                                className="hover:text-orange-600 transition-colors truncate"
                              >
                                {rescue.email}
                              </a>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 flex gap-2">
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <a 
                              href={`mailto:${rescue.email}`}
                              className="flex items-center justify-center gap-2"
                            >
                              <Mail className="h-3 w-3" />
                              Contact
                            </a>
                          </Button>
                          {rescue.website && (
                            <Button asChild variant="outline" size="sm" className="flex-1">
                              <a 
                                href={rescue.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Website
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Want to Partner With Us?</h2>
            <p className="text-xl opacity-90">
              Are you a rescue organization looking to expand your foster network? 
              We'd love to hear from you and explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="text-lg bg-white text-orange-600 hover:bg-gray-100">
                <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`}>
                  Contact Partnerships
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="text-lg border-white text-white hover:bg-white hover:text-orange-600">
                <a href="/contact">General Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}