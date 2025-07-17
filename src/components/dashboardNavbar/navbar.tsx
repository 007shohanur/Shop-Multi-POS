"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Package, Users, ShoppingCart, Receipt, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  {
    name: "Add New Products",
    href: "/dashboard/products/new",
    icon: Package,
  },
  {
    name: "Customer Details",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    name: "Order List",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Expense Sheet",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    name: "Monthly Sales Report",
    href: "/dashboard/reports/sales",
    icon: TrendingUp,
  },
]

export default function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">B</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">BusinessHub</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (Alternative approach using dropdown) */}
      <div className="lg:hidden">
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
