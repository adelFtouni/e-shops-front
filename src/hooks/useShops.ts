import { useEffect, useMemo, useState } from "react";
import type { Shop } from "../types";
import { mockShops } from "../data/shops";

/**
 * useShops - provides mock shops, search & basic sorting
 */
export const useShops = (query: string) => {
  const [shops] = useState<Shop[]>(mockShops);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return shops;
    return shops.filter((s) => s.name.toLowerCase().includes(q) || s.products.some((p) => p.title.toLowerCase().includes(q)));
  }, [shops, query]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(id);
  }, []);

  return { shops: filtered, loading };
};
