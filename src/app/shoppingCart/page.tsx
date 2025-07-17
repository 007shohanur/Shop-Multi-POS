"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

interface CustomerDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      color: "Black",
    },
    {
      id: "2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
      size: "M",
      color: "Navy Blue",
    },
    {
      id: "3",
      name: "Smartphone Case",
      price: 19.99,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
      color: "Clear",
    },
  ])

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  })

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const updateCustomerDetails = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingCart className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex gap-2 mt-1">
                        {item.size && <Badge variant="secondary">Size: {item.size}</Badge>}
                        {item.color && <Badge variant="secondary">Color: {item.color}</Badge>}
                      </div>
                      <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Customer Details */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={customerDetails.firstName}
                      onChange={(e) => updateCustomerDetails("firstName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={customerDetails.lastName}
                      onChange={(e) => updateCustomerDetails("lastName", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => updateCustomerDetails("email", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={customerDetails.phone}
                      onChange={(e) => updateCustomerDetails("phone", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={customerDetails.address}
                      onChange={(e) => updateCustomerDetails("address", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={customerDetails.city}
                      onChange={(e) => updateCustomerDetails("city", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={customerDetails.state}
                      onChange={(e) => updateCustomerDetails("state", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={customerDetails.zipCode}
                      onChange={(e) => updateCustomerDetails("zipCode", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </div>

                <div className="pt-4 text-sm text-gray-600">
                  <p className="font-semibold mb-2">Shipping to:</p>
                  <p>
                    {customerDetails.firstName} {customerDetails.lastName}
                  </p>
                  <p>{customerDetails.address}</p>
                  <p>
                    {customerDetails.city}, {customerDetails.state} {customerDetails.zipCode}
                  </p>
                  <p>{customerDetails.email}</p>
                  <p>{customerDetails.phone}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

