
import { Product, SortOption } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductsGridProps {
  products: Product[];
  openProductDetails: (product: Product) => void;
}

export function ProductsGrid({ products, openProductDetails }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openProductDetails={openProductDetails}
          />
        ))
      ) : (
        <div className="col-span-full py-12 text-center">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
