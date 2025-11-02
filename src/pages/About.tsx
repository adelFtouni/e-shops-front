import React from "react";
import { Card } from "../components/ui/Card";

export const About: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <h2 className="text-2xl font-bold">About E-Shops</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          E-Shops is a multi-vendor marketplace demo where anyone can build and sell from their own shop.
          Customers earn points on purchases to redeem later. This is a frontend-only mock demonstrating
          architecture, componentization, and client-side flows.
        </p>
      </Card>
    </main>
  );
};
