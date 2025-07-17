import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Plus, Filter, Download } from "lucide-react"

const expenses = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Office Supplies - Pens and Paper",
    category: "Office",
    amount: 45.99,
    status: "approved",
  },
  {
    id: 2,
    date: "2024-01-14",
    description: "Client Lunch Meeting",
    category: "Meals",
    amount: 89.5,
    status: "pending",
  },
  {
    id: 3,
    date: "2024-01-13",
    description: "Uber to Airport",
    category: "Transportation",
    amount: 32.75,
    status: "approved",
  },
  {
    id: 4,
    date: "2024-01-12",
    description: "Hotel Stay - Business Trip",
    category: "Accommodation",
    amount: 245.0,
    status: "approved",
  },
  {
    id: 5,
    date: "2024-01-11",
    description: "Software Subscription",
    category: "Technology",
    amount: 29.99,
    status: "rejected",
  },
  {
    id: 6,
    date: "2024-01-10",
    description: "Gas for Company Car",
    category: "Transportation",
    amount: 65.4,
    status: "pending",
  },
  {
    id: 7,
    date: "2024-01-09",
    description: "Conference Registration",
    category: "Training",
    amount: 299.0,
    status: "approved",
  },
  {
    id: 8,
    date: "2024-01-08",
    description: "Team Dinner",
    category: "Meals",
    amount: 156.75,
    status: "approved",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800 hover:bg-green-100"
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    case "rejected":
      return "bg-red-100 text-red-800 hover:bg-red-100"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }
}

const getCategoryColor = (category: string) => {
  const colors = {
    Office: "bg-blue-100 text-blue-800",
    Meals: "bg-orange-100 text-orange-800",
    Transportation: "bg-purple-100 text-purple-800",
    Accommodation: "bg-pink-100 text-pink-800",
    Technology: "bg-cyan-100 text-cyan-800",
    Training: "bg-indigo-100 text-indigo-800",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
}

export default function ExpenseSheet() {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Expense Sheet</h1>
          <p className="text-gray-600">Track and manage your business expenses</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-xl font-semibold text-green-600">
                $
                {expenses
                  .filter((e) => e.status === "approved")
                  .reduce((sum, e) => sum + e.amount, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-xl font-semibold text-yellow-600">
                $
                {expenses
                  .filter((e) => e.status === "pending")
                  .reduce((sum, e) => sum + e.amount, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Table View */}
      <Card className="hidden md:block">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Date</th>
                  <th className="text-left p-4 font-medium text-gray-900">Description</th>
                  <th className="text-left p-4 font-medium text-gray-900">Category</th>
                  <th className="text-right p-4 font-medium text-gray-900">Amount</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-center p-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-sm text-gray-600">{new Date(expense.date).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{expense.description}</div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary" className={getCategoryColor(expense.category)}>
                        {expense.category}
                      </Badge>
                    </td>
                    <td className="p-4 text-right font-medium">${expense.amount.toFixed(2)}</td>
                    <td className="p-4">
                      <Badge variant="secondary" className={getStatusColor(expense.status)}>
                        {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {expenses.map((expense) => (
          <Card key={expense.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{expense.description}</h3>
                  <p className="text-sm text-gray-600">{new Date(expense.date).toLocaleDateString()}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className={getCategoryColor(expense.category)}>
                  {expense.category}
                </Badge>
                <Badge variant="secondary" className={getStatusColor(expense.status)}>
                  {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${expense.amount.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}