import React from "react";
import type { Shop } from "../../types";
import { Card } from "../ui/Card";
import { toUSD } from "../../utils/currency";

/**
 * ShopCard - single responsibility: render shop summary
 */
interface Props {
  shop: Shop;
  onBrowse?: (shop: Shop) => void;
}

export const ShopCard: React.FC<Props> = ({ shop, onBrowse }) => {
  // Rating calculation based on sales: 0-5 stars scale
  const rating = Math.min(5, Math.round((shop.sales / 1000) * 2) || 1); // coarse mapping

  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{shop.name}</h3>
        <div className="text-sm text-gray-500">Sales: {shop.sales}</div>
        <div className="mt-2">
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {shop.products.slice(0, 3).map((p) => (
            <div key={p.id} className="border rounded p-1 text-xs">
              <div className="font-medium truncate">{p.title}</div>
              <div className="text-xs">{toUSD(p.price)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">{shop.products.length} products</div>
        <button
          onClick={() => onBrowse?.(shop)}
          className="px-3 py-1 rounded bg-eshopyellow text-black text-sm"
        >
          Browse
        </button>
      </div>
    </Card>
  );
};
