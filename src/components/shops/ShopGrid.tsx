import React from "react";
import type { Shop } from "../../types";
import { ShopCard } from "./ShopCard";

interface Props {
  shops: Shop[];
  onBrowse?: (shop: Shop) => void;
}

export const ShopGrid: React.FC<Props> = ({ shops, onBrowse }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {shops.map((s) => (
        <ShopCard key={s.id} shop={s} onBrowse={onBrowse} />
      ))}
    </div>
  );
};
