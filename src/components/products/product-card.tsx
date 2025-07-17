"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number | null
  image: string
  rating: number
  reviews: number
  badge?: string | null
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", product.name)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleQuickView = () => {
    // Quick view logic here
    console.log("Quick view:", product.name)
  }

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl border-0 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10">
            {product.badge && (
              <Badge
                variant={product.badge === "Sale" ? "destructive" : product.badge === "New" ? "default" : "secondary"}
                className="text-xs font-medium"
              >
                {product.badge}
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="ml-1 text-xs font-medium">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white ${
              isWishlisted ? "text-red-500" : "text-gray-600"
            }`}
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>

          {/* Quick Actions Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900"
                onClick={handleQuickView}
              >
                <Eye className="h-4 w-4 mr-1" />
                Quick View
              </Button>
            </div>
          </div>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <Badge variant="secondary" className="text-sm font-medium">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm leading-tight">{product.name}</h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full transition-all duration-200" onClick={handleAddToCart} disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
