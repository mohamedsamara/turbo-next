import { Metadata } from "next";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import classNames from "classnames";
import { Product } from "../../../lib/types/product";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return {
    title: product.title,
  };
}

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export default async function Page({ params }: Props) {
  const product = await fetchProduct(params.id);
  const productRating = parseFloat(product.rating.rate.toFixed());

  return (
    <main>
      <div className="bg-white">
        <div className="m-4">
          <Link
            href="/"
            className="inline-block px-2 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <IoArrowBack className="text-lg" />
          </Link>
        </div>
        <div className="max-w-2xl px-4 mx-auto mt-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="mb-4 aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="lg:border-l lg:border-gray-200 lg:pl-8">
            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>
            <div className="mt-4 lg:mt-0">
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <AiFillStar
                        key={rating}
                        className={classNames(
                          productRating > rating
                            ? "fill-yellow-500"
                            : "fill-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {product.rating.count} reviews
                  </span>
                </div>
              </div>
            </div>
            <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
              <div className="mt-10">
                <h2 className="font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
