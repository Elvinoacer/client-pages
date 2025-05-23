// "use client";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";
// import ProductCard from "@/components/products/ProductCard";
// import ProductGrid from "@/components/products/ProductGrid";
// import Breadcrumb from "@/components/ui-2/Breadcrumb";
// import { categories } from "@/lib/constants/categories";
// import { products } from "@/lib/constants/products";
// import PriceFilter from "@/components/products/PriceFilter";
// import Pagination from "@/components/ui-2/Pagination";
// import React from "react";

// export default function CategoryPage({
//   params,
// }: {
//   params: Promise<{ categorySlug: string }>;
// }) {
//   const { categorySlug } = React.use(params);
//   const category = categories.find((c) => c.slug === categorySlug);

//   // if (!category) {
//   //   notFound();
//   // }

//   const categoryProducts = products.filter((p) => p.categoryId === category.id);

//   return (
//     <div className="container px-4 py-8 mx-auto">
//       <Breadcrumb
//         items={[
//           { name: "Home", href: "/" },
//           { name: "Products", href: "/products" },
//           { name: category.name, href: `/products/category/${category.slug}` },
//         ]}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8"
//       >
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//           {category.name}
//         </h1>
//         <p className="mt-2 text-gray-600 dark:text-gray-400">
//           {categoryProducts.length} products available
//         </p>
//       </motion.div>

//       <div className="grid gap-6 md:grid-cols-4">
//         {/* Filters Sidebar */}
//         <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 md:col-span-1">
//           <PriceFilter products={products} />
//         </div>

//         {/* Products Grid */}
//         <div className="md:col-span-3">
//           <ProductGrid>
//             {categoryProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </ProductGrid>

//           <div className="mt-8">
//             <Pagination
//               totalItems={categoryProducts.length}
//               itemsPerPage={12}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumb from "@/components/ui-2/Breadcrumb";
// import { categories } from "@/lib/constants/categories";
import categories from "@/lib/constants/categories.json";
import { products } from "@/lib/constants/products";
import PriceFilter from "@/components/products/PriceFilter";
import Pagination from "@/components/ui-2/Pagination";
import React from "react";
import { EmptyState } from "@/components/products/EmptyState";

export default function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = React.use(params);
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.categoryId.toString() === category.id);

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: category.name, href: `/products/category/${category.slug}` },
        ]}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{category.name}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{categoryProducts.length} products available</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 md:col-span-1">
          <PriceFilter products={products} />
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {categoryProducts.length > 0 ? (
            <>
              <ProductGrid>
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ProductGrid>
              <div className="mt-8">
                <Pagination totalItems={categoryProducts.length} itemsPerPage={12} />
              </div>
            </>
          ) : (
            <EmptyState categoryName={category.name} />
          )}
        </div>
      </div>
    </div>
  );
}
