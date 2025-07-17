"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  joinDate: string
  status: "active" | "inactive" | "pending"
  avatar?: string
}

const customers: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, Los Angeles, CA 90210",
    joinDate: "2024-02-20",
    status: "active",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 (555) 456-7890",
    address: "789 Pine Rd, Chicago, IL 60601",
    joinDate: "2024-03-10",
    status: "pending",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+1 (555) 321-0987",
    address: "321 Elm St, Houston, TX 77001",
    joinDate: "2024-01-05",
    status: "inactive",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (555) 654-3210",
    address: "654 Maple Dr, Phoenix, AZ 85001",
    joinDate: "2024-02-28",
    status: "active",
  },
]

const getStatusColor = (status: Customer["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 hover:bg-green-100"
    case "inactive":
      return "bg-red-100 text-red-800 hover:bg-red-100"
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
}

export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Customer Details</h1>
        <p className="text-muted-foreground">Manage and view all customer information</p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Card>
          <CardHeader>
            <CardTitle>All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Customer</th>
                    <th className="text-left py-3 px-4 font-medium">Contact</th>
                    <th className="text-left py-3 px-4 font-medium">Address</th>
                    <th className="text-left py-3 px-4 font-medium">Join Date</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-muted/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-sm text-muted-foreground">ID: {customer.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{customer.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{customer.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-start space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="max-w-xs">{customer.address}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(customer.joinDate).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {customers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{customer.name}</h3>
                    <p className="text-sm text-muted-foreground">ID: {customer.id}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(customer.status)}>
                  {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="break-all">{customer.email}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.phone}</span>
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{customer.address}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined: {new Date(customer.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}