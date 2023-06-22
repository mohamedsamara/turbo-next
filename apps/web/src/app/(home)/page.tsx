import { Metadata } from "next";
import Link from "next/link";
import { Product } from "../../lib/types/product";

export const metadata: Metadata = {
  title: "Shop",
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default async function Page() {
  const products = await fetchProducts();
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Shop
        </h2>
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.rating.rate}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
