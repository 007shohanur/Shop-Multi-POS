import ProductCard from "@/components/products/product-card"

const sampleProducts = [
  {
    id: 1,
    name: "1 Ltr Teer Soyabean Oil",
    price: 299.99,
    originalPrice: 399.99,
    image: "	https://i.chaldn.com/_mpimage/teer-fortified-soyabean-oil-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136108&q=best&v=1://images.app.goo.gl/uGhn2jr3UDghk9zB9",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: null,
    image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65fa986dd61902ef2308879d_Lux-Soap-100gm-Buy3-Save-15-tk_1_550.webp.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 599.99,
    originalPrice: 699.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 67,
    badge: "Sale",
    inStock: false,
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 449.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 203,
    badge: null,
    inStock: true,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Super Shop Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
