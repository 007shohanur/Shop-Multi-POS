import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Calendar } from "lucide-react"

const salesData = [
  {
    id: 1,
    product: "Premium Wireless Headphones",
    category: "Electronics",
    unitsSold: 245,
    revenue: 24500,
    growth: 12.5,
    date: "2024-01-15",
  },
  {
    id: 2,
    product: "Organic Coffee Beans",
    category: "Food & Beverage",
    unitsSold: 892,
    revenue: 17840,
    growth: -3.2,
    date: "2024-01-14",
  },
  {
    id: 3,
    product: "Fitness Tracker Pro",
    category: "Health & Fitness",
    unitsSold: 156,
    revenue: 31200,
    growth: 8.7,
    date: "2024-01-13",
  },
  {
    id: 4,
    product: "Eco-Friendly Water Bottle",
    category: "Lifestyle",
    unitsSold: 423,
    revenue: 12690,
    growth: 15.3,
    date: "2024-01-12",
  },
  {
    id: 5,
    product: "Smart Home Hub",
    category: "Electronics",
    unitsSold: 89,
    revenue: 26700,
    growth: -1.8,
    date: "2024-01-11",
  },
  {
    id: 6,
    product: "Artisan Skincare Set",
    category: "Beauty",
    unitsSold: 167,
    revenue: 20040,
    growth: 22.1,
    date: "2024-01-10",
  },
]

const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0)
const totalUnits = salesData.reduce((sum, item) => sum + item.unitsSold, 0)
const averageGrowth = salesData.reduce((sum, item) => sum + item.growth, 0) / salesData.length

export default function MonthlySalesReport() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Monthly Sales Report</h1>
          <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
            <Calendar className="h-4 w-4" />
            January 2024
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Units Sold</p>
                  <p className="text-2xl font-bold text-gray-900">{totalUnits.toLocaleString()}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Growth</p>
                  <p className="text-2xl font-bold text-gray-900">{averageGrowth.toFixed(1)}%</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales List */}
        <Card>
          <CardHeader>
            <CardTitle>Product Sales Performance</CardTitle>
            <CardDescription>Detailed breakdown of product sales for this month</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {salesData.map((item) => (
                <div key={item.id} className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.product}</h3>
                        <Badge variant="secondary" className="w-fit">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Sale Date: {formatDate(item.date)}</p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
                      {/* Units Sold */}
                      <div className="text-center sm:text-left">
                        <p className="text-sm font-medium text-gray-600">Units Sold</p>
                        <p className="text-xl font-bold text-gray-900">{item.unitsSold.toLocaleString()}</p>
                      </div>

                      {/* Revenue */}
                      <div className="text-center sm:text-left">
                        <p className="text-sm font-medium text-gray-600">Revenue</p>
                        <p className="text-xl font-bold text-gray-900">{formatCurrency(item.revenue)}</p>
                      </div>

                      {/* Growth */}
                      <div className="text-center sm:text-left">
                        <p className="text-sm font-medium text-gray-600">Growth</p>
                        <div className="flex items-center justify-center sm:justify-start gap-1">
                          {item.growth >= 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          )}
                          <span className={`text-xl font-bold ${item.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {item.growth > 0 ? "+" : ""}
                            {item.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-4">
          Report generated on{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  )
}