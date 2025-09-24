"use client";
import { useState } from "react";
import styles from "./page.module.css";

type FoodSuggestion = {
  title: string;
  description: string;
  ingredients: string[];
};

type SuggestionsResponse = {
  suggestions: FoodSuggestion[];
  model: string;
  source: "llm" | "mock";
};

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SuggestionsResponse | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setData(null);
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || "Request failed");
      }
      setData(json as SuggestionsResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Food Suggestions</h1>
        <p>Tell us what you are craving and get 3 options back.</p>

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
            {loading ? "Thinking..." : "Get suggestions"}
          </button>
        </form>

        {error && (
          <div style={{ color: "#b00020", marginTop: 12 }}>Error: {error}</div>
        )}

        {data && (
          <section style={{ width: "100%", maxWidth: 720, marginTop: 24 }}>
            <div style={{ opacity: 0.7, fontSize: 12 }}>Model: {data.model} · Source: {data.source}</div>
            <div style={{ height: 12 }} />
            {data.suggestions.map((s, i) => (
              <article key={i} style={{
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                background: "#fff"
              }}>
                <h3 style={{ margin: 0 }}>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.description}</p>
                {s.ingredients?.length > 0 && (
                  <div>
                    <strong>Ingredients:</strong>
                    <ul>
                      {s.ingredients.map((ing, j) => (
                        <li key={j}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
