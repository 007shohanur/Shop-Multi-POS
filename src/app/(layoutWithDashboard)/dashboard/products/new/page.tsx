"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [images, setImages] = useState<string[]>([])

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const addImage = () => {
    setImages([...images, `/placeholder.svg?height=200&width=200`])
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Product submitted")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Add New Product</h1>
        <p className="text-muted-foreground">Fill in the details below to add a new product to your inventory.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input id="productName" placeholder="Enter product name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="Enter SKU code" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter product description" className="min-h-[100px]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Textarea id="shortDescription" placeholder="Brief product summary" className="min-h-[60px]" />
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Inventory */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing & Inventory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price *</Label>
                <Input id="price" type="number" step="0.01" placeholder="0.00" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comparePrice">Compare at Price</Label>
                <Input id="comparePrice" type="number" step="0.01" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="costPrice">Cost per Item</Label>
                <Input id="costPrice" type="number" step="0.01" placeholder="0.00" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quantity">Stock Quantity</Label>
                <Input id="quantity" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lowStock">Low Stock Alert</Label>
                <Input id="lowStock" type="number" placeholder="5" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="trackQuantity" />
              <Label htmlFor="trackQuantity">Track quantity</Label>
            </div>
          </CardContent>
        </Card>

        {/* Product Organization */}
        <Card>
          <CardHeader>
            <CardTitle>Product Organization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="sports">Sports & Outdoors</SelectItem>
                    <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" placeholder="Enter brand name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag(tag)} />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Product Images */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                className="aspect-square flex flex-col items-center justify-center gap-2 border-dashed bg-transparent"
                onClick={addImage}
              >
                <Upload className="w-6 h-6" />
                <span className="text-sm">Add Image</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Shipping & Dimensions */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping & Dimensions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" step="0.01" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">Length (cm)</Label>
                <Input id="length" type="number" step="0.1" placeholder="0.0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (cm)</Label>
                <Input id="width" type="number" step="0.1" placeholder="0.0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" step="0.1" placeholder="0.0" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="requiresShipping" defaultChecked />
              <Label htmlFor="requiresShipping">This product requires shipping</Label>
            </div>
          </CardContent>
        </Card>

        {/* Product Status */}
        <Card>
          <CardHeader>
            <CardTitle>Product Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="draft">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="visibility">Visibility</Label>
                <Select defaultValue="visible">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visible">Visible</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="featured" />
              <Label htmlFor="featured">Featured product</Label>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </div>
  )
}
