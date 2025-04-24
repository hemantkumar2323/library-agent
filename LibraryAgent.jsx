import React, { useState } from 'react';

export default function LibraryAgent() {
  const [insights, setInsights] = useState([
    {
      source: 'Twitter - Alex Hormozi',
      type: 'Offer Pattern',
      value: '“Price anchored bundles outperform Buy 1 Get 1 Free by 37% when positioned as value packs.”'
    },
    {
      source: 'Reddit r/Entrepreneur',
      type: 'Market Signal',
      value: 'A surge in demand for AI résumé builders was spotted in Q2 2025 — up 400% YoY.'
    },
    {
      source: 'Book — Breakthrough Advertising',
      type: 'Psych Trigger',
      value: '“People don’t buy products. They buy transformations of identity.”'
    },
    {
      source: 'Scientific Study — PubMed',
      type: 'Validation Insight',
      value: 'Ashwagandha improves cortisol regulation in 87% of subjects. Trending in wellness DTC brands.'
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📚 LibraryAgent — JARVIS Intelligence + Strategy Scanner</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Source</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Insight Type</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Intelligence / Value</th>
          </tr>
        </thead>
        <tbody>
          {insights.map((item, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.source}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.type}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
