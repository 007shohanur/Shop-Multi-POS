"use client"

import { useState } from "react"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  CreditCard,
  Clock,
  Package,
  Filter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock data for the sales report
const salesData = {
  date: "2024-01-17",
  totalSales: 15420.5,
  totalTransactions: 127,
  averageOrderValue: 121.42,
  totalCustomers: 98,
  previousDayComparison: {
    sales: 8.5,
    transactions: -2.3,
    customers: 12.1,
  },
}

const hourlyData = [
  { hour: "09:00", sales: 450, transactions: 8 },
  { hour: "10:00", sales: 720, transactions: 12 },
  { hour: "11:00", sales: 980, transactions: 15 },
  { hour: "12:00", sales: 1340, transactions: 18 },
  { hour: "13:00", sales: 1680, transactions: 22 },
  { hour: "14:00", sales: 1520, transactions: 19 },
  { hour: "15:00", sales: 1890, transactions: 24 },
  { hour: "16:00", sales: 2180, transactions: 28 },
  { hour: "17:00", sales: 2340, transactions: 31 },
  { hour: "18:00", sales: 1820, transactions: 23 },
  { hour: "19:00", sales: 1290, transactions: 16 },
  { hour: "20:00", sales: 890, transactions: 11 },
]

const topProducts = [
  { id: 1, name: "Wireless Headphones Pro", category: "Electronics", quantity: 24, revenue: 2880.0, price: 120.0 },
  { id: 2, name: "Premium Coffee Beans", category: "Food & Beverage", quantity: 45, revenue: 1350.0, price: 30.0 },
  { id: 3, name: "Organic Cotton T-Shirt", category: "Clothing", quantity: 32, revenue: 1280.0, price: 40.0 },
  { id: 4, name: "Smart Water Bottle", category: "Lifestyle", quantity: 18, revenue: 1080.0, price: 60.0 },
  { id: 5, name: "Yoga Mat Premium", category: "Sports", quantity: 15, revenue: 1050.0, price: 70.0 },
]

const categoryData = [
  { category: "Electronics", sales: 4250.0, percentage: 27.6, transactions: 35 },
  { category: "Clothing", sales: 3180.0, percentage: 20.6, transactions: 28 },
  { category: "Food & Beverage", sales: 2890.0, percentage: 18.7, transactions: 42 },
  { category: "Lifestyle", sales: 2340.0, percentage: 15.2, transactions: 19 },
  { category: "Sports", sales: 1680.0, percentage: 10.9, transactions: 14 },
  { category: "Books", sales: 1080.5, percentage: 7.0, transactions: 21 },
]

const paymentMethods = [
  { method: "Credit Card", amount: 8950.3, percentage: 58.1, transactions: 74 },
  { method: "Debit Card", amount: 3420.8, percentage: 22.2, transactions: 28 },
  { method: "Digital Wallet", amount: 2180.4, percentage: 14.1, transactions: 18 },
  { method: "Cash", amount: 869.0, percentage: 5.6, transactions: 7 },
]

const recentTransactions = [
  {
    id: "TXN-001",
    time: "19:45",
    customer: "John Smith",
    items: 3,
    amount: 156.8,
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "TXN-002",
    time: "19:42",
    customer: "Sarah Johnson",
    items: 1,
    amount: 89.99,
    method: "Digital Wallet",
    status: "Completed",
  },
  {
    id: "TXN-003",
    time: "19:38",
    customer: "Mike Davis",
    items: 2,
    amount: 234.5,
    method: "Debit Card",
    status: "Completed",
  },
  {
    id: "TXN-004",
    time: "19:35",
    customer: "Emily Brown",
    items: 4,
    amount: 178.25,
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "TXN-005",
    time: "19:32",
    customer: "David Wilson",
    items: 1,
    amount: 45.0,
    method: "Cash",
    status: "Completed",
  },
]

export default function Component() {
  const [selectedDate, setSelectedDate] = useState(salesData.date)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? "+" : ""
    return `${sign}${value.toFixed(1)}%`
  }

  const maxHourlySales = Math.max(...hourlyData.map((d) => d.sales))

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Daily Sales Report</h1>
          <p className="text-muted-foreground">
            Sales performance overview for{" "}
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-auto"
          />
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(salesData.totalSales)}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {salesData.previousDayComparison.sales >= 0 ? (
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
              )}
              <span className={salesData.previousDayComparison.sales >= 0 ? "text-green-500" : "text-red-500"}>
                {formatPercentage(salesData.previousDayComparison.sales)}
              </span>
              <span className="ml-1">from yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesData.totalTransactions}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {salesData.previousDayComparison.transactions >= 0 ? (
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
              )}
              <span className={salesData.previousDayComparison.transactions >= 0 ? "text-green-500" : "text-red-500"}>
                {formatPercentage(salesData.previousDayComparison.transactions)}
              </span>
              <span className="ml-1">from yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(salesData.averageOrderValue)}</div>
            <p className="text-xs text-muted-foreground">Per transaction average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{salesData.totalCustomers}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              <span className="text-green-500">{formatPercentage(salesData.previousDayComparison.customers)}</span>
              <span className="ml-1">from yesterday</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hourly Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Hourly Sales Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hourlyData.map((data, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium">{data.hour}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{formatCurrency(data.sales)}</span>
                    <span className="text-xs text-muted-foreground">{data.transactions} transactions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(data.sales / maxHourlySales) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Top Selling Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.category}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{product.quantity}</TableCell>
                    <TableCell className="text-right font-medium">{formatCurrency(product.revenue)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.category}</span>
                    <span className="text-sm font-medium">{formatCurrency(category.sales)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-12">{category.percentage}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{category.transactions} transactions</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full bg-blue-600"
                      style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                    />
                    <span className="font-medium">{method.method}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(method.amount)}</div>
                    <div className="text-xs text-muted-foreground">
                      {method.percentage}% • {method.transactions} txns
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <div className="font-medium">{transaction.customer}</div>
                    <div className="text-sm text-muted-foreground">
                      {transaction.time} • {transaction.items} items • {transaction.method}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatCurrency(transaction.amount)}</div>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
