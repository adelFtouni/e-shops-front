import React, { useState } from "react";
import { Card } from "../components/ui/Card";
import type { Product } from "../types";

/**
 * SellerDashboard - mock add/edit product UI (no backend)
 */
export const SellerDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: "own-1", title: "Sample Product", price: 20, description: "A seller demo product" }
  ]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || price <= 0) { alert("invalid"); return; }
    setProducts((p) => [{ id: `p-${Date.now()}`, title, price, description: "" }, ...p]);
    setTitle("");
    setPrice(0);
  };

  const remove = (id: string) => setProducts((p) => p.filter((x) => x.id !== id));

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Seller Dashboard</h2>
      <Card>
        <form onSubmit={add} className="space-y-3">
          <div>
            <label className="block text-sm">Product title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="mt-1 block w-full rounded border p-2 dark:bg-gray-800" />
          </div>
          <div>
            <label className="block text-sm">Price (USD)</label>
            <input type="number" value={price} onChange={(e)=>setPrice(Number(e.target.value))} className="mt-1 block w-full rounded border p-2 dark:bg-gray-800" />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-3 py-2 rounded bg-eshopyellow">Add</button>
          </div>
        </form>
      </Card>

      <section className="mt-6">
        <h3 className="font-semibold mb-2">Your products</h3>
        <div className="space-y-2">
          {products.map((p) => (
            <div key={p.id} className="flex justify-between items-center border p-3 rounded">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">${p.price}</div>
              </div>
              <button onClick={() => remove(p.id)} className="px-2 py-1 rounded border">Remove</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
