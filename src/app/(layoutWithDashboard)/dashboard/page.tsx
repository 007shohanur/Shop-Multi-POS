import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Activity,
  Bell,
  Search,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50">
     

      <div className="flex-1 p-4 lg:p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, John!</h2>
            <p className="text-gray-600">{"Here's what's happening with your business today."}</p>
          </div>
          <Button className="w-fit">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
              <DollarSign className="w-4 h-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +20.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Subscriptions</CardTitle>
              <Users className="w-4 h-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +180.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Sales</CardTitle>
              <ShoppingCart className="w-4 h-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +19% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Now</CardTitle>
              <Activity className="w-4 h-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -2% from last hour
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>Revenue and sales data for the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>You have 265 orders this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "ORD-001",
                      customer: "Olivia Martin",
                      email: "olivia.martin@email.com",
                      amount: "$1,999.00",
                      status: "Completed",
                    },
                    {
                      id: "ORD-002",
                      customer: "Jackson Lee",
                      email: "jackson.lee@email.com",
                      amount: "$39.00",
                      status: "Processing",
                    },
                    {
                      id: "ORD-003",
                      customer: "Isabella Nguyen",
                      email: "isabella.nguyen@email.com",
                      amount: "$299.00",
                      status: "Completed",
                    },
                    {
                      id: "ORD-004",
                      customer: "William Kim",
                      email: "will@email.com",
                      amount: "$99.00",
                      status: "Pending",
                    },
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {order.customer
                              .split(" ")
                              .map(n => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{order.amount}</p>
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "default"
                              : order.status === "Processing"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: "New user registered", time: "2 minutes ago", type: "user" },
                  { action: "Order #1234 completed", time: "5 minutes ago", type: "order" },
                  { action: "Payment received", time: "10 minutes ago", type: "payment" },
                  { action: "New review posted", time: "15 minutes ago", type: "review" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Goals</CardTitle>
                <CardDescription>Your progress this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sales Target</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Customer Satisfaction</span>
                    <span>89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Revenue Goal</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Users className="w-4 h-4 mr-2" />
                  Add New User
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Create Order
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}