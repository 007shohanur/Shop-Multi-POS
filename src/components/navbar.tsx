"use client"

import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const navigationItems = [
  { name: "POS", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Product", href: "/product" },
  { name: "Sales Report", href: "/sales-report" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl">Logo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:flex">
            <Link href="/shoppingCart" className="mx-4" > <ShoppingCart /> </Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              {/* Mobile Navigation Links */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}




              {/* Mobile Login Button */}
              <div className="pt-4 border-t">
                <ShoppingCart />
                <Button asChild className="w-full">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
