import { useAuth } from "./useAuth";

/**
 * usePoints - encapsulates points logic (earn/spend)
 * points ratio: 10 points per $1 spent
 */
export const usePoints = () => {
  const { user, updatePoints, addPurchase } = useAuth();

  const earnPoints = (dollars: number) => {
    const earned = Math.round(dollars * 10);
    updatePoints(earned);
    return earned;
  };

  const spendPoints = (amount: number) => {
    updatePoints(-amount);
  };

  const recordPurchase = (productId: string, shopId: string, amount: number) => {
    const points = earnPoints(amount);
    addPurchase({ productId, shopId, amount, pointsEarned: points });
    return points;
  };

  return { points: user?.points ?? 0, earnPoints, spendPoints, recordPurchase };
};
