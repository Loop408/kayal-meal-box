// app/subscriptions/page.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Subscription {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  mealPreference: "veg" | "non-veg";
  startDate: string;
  address: string;
  createdAt: string;
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/subscriptions");
        const json = await res.json();
        if (json.success) {
          setSubscriptions(json.data);
        } else {
          setError(json.error || "Failed to load subscriptions");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.container}>Loading subscriptions…</div>;
  }
  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Subscriptions</h1>
      {subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Plan</th>
              <th>Meal</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.id} className={styles.row}>
                <td>{sub.name}</td>
                <td>{sub.email}</td>
                <td>{sub.phone}</td>
                <td>{sub.plan}</td>
                <td>{sub.mealPreference}</td>
                <td>{new Date(sub.startDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
