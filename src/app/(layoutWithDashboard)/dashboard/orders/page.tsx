import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Order {
  id: string
  customer: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: number
}

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Smith",
    date: "2024-01-15",
    status: "delivered",
    total: 299.99,
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    date: "2024-01-14",
    status: "shipped",
    total: 149.5,
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    date: "2024-01-13",
    status: "processing",
    total: 89.99,
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "Emily Brown",
    date: "2024-01-12",
    status: "pending",
    total: 199.99,
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "David Wilson",
    date: "2024-01-11",
    status: "cancelled",
    total: 79.99,
    items: 1,
  },
  {
    id: "ORD-006",
    customer: "Lisa Anderson",
    date: "2024-01-10",
    status: "delivered",
    total: 349.99,
    items: 5,
  },
]

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    case "processing":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "shipped":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    case "delivered":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "cancelled":
      return "bg-red-100 text-red-800 hover:bg-red-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

export default function OrderList() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Orders</h1>
        <p className="text-gray-600">Manage and track your orders</p>
      </div>

      {/* Mobile View - Cards */}
      <div className="block lg:hidden space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Items</p>
                  <p className="font-medium">{order.items} items</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Total</p>
                  <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden lg:block">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Order ID</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Customer</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Date</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Items</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={`border-b hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="p-4">
                        <span className="font-mono font-medium">{order.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="font-medium">{order.customer}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-600">{new Date(order.date).toLocaleDateString()}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-600">{order.items} items</span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="font-bold">${order.total.toFixed(2)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tablet View - Compact Cards */}
      <div className="hidden md:block lg:hidden space-y-3">
        {orders.map((order) => (
          <Card key={order.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-lg">{order.id}</h3>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{order.customer}</span>
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                    <span>{order.items} items</span>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="font-bold text-xl">${order.total.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
