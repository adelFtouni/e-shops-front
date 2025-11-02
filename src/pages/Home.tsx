import React, { useState } from "react";
import { useShops } from "../hooks/useShops";
import { ShopGrid } from "../components/shops/ShopGrid";
import { useAuth } from "../hooks/useAuth";
import { usePoints } from "../hooks/usePoints";
import { Card } from "../components/ui/Card";
import { toUSD } from "../utils/currency";

/**
 * Home page: search, featured shops, simulate purchase modal flow
 */
export const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const { shops, loading } = useShops(query);
  const { user } = useAuth();
  const { recordPurchase } = usePoints();

  const browseShop = (shop: typeof shops[number]) => {
    const product = shop.products[0];
    if (!product) { alert("No products available."); return; }
    const confirmed = confirm(`Buy ${product.title} for ${toUSD(product.price)}?`);
    if (!confirmed) return;
    const points = recordPurchase(product.id, shop.id, product.price);
    alert(`Purchase successful! Earned ${points} points.`);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Featured Shops</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          placeholder="Search shops or products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-md rounded-md border p-2 dark:bg-gray-800"
        />
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {user ? `Welcome back, ${user.name} — ${user.points} pts` : "Log in to earn points"}
        </div>
      </div>

      {loading ? (
        <div>Loading shops...</div>
      ) : shops.length === 0 ? (
        <div>No shops match your search.</div>
      ) : (
        <div>
          <ShopGrid shops={shops} onBrowse={browseShop} />
        </div>
      )}

      <section className="mt-8">
        <Card>
          <h3 className="text-lg font-semibold">Points system</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Earn 10 points per $1 spent. Points show in your navbar and can be used later as balance.</p>
        </Card>
      </section>
    </main>
  );
};
