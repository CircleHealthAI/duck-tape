"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Food Suggestions</h1>
        <p>Enter your craving and submit to see suggestions.</p>

        <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: 560 }}>
          <label htmlFor="prompt" style={{ display: "block", marginBottom: 8 }}>
            What are you craving today?
          </label>
          <input
            id="prompt"
            type="text"
            placeholder="e.g., something spicy and quick"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <div style={{ height: 12 }} />
          <button className={styles.primary} type="submit" disabled={loading || !prompt.trim()}>
            {loading ? "Submitting..." : "Get suggestions"}
          </button>
        </form>

        {error && (
          <div style={{ color: "#b00020", marginTop: 12 }}>Error: {error}</div>
        )}

        {/* TODO: Add loading, empty, and results sections with accessible markup */}
      </main>
    </div>
  );
}

