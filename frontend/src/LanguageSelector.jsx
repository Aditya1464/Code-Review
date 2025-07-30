import React from "react";

export const defaultSnippets = {
  javascript: `function sum(a, b) {
  return a + b;
}`,
  python: `def sum(a, b):
    return a + b`,
  java: `public int sum(int a, int b) {
    return a + b;
}`,
  cpp: `int sum(int a, int b) {
    return a + b;
}`,
  typescript: `function sum(a: number, b: number): number {
  return a + b;
}`,
  go: `func sum(a int, b int) int {
    return a + b
}`,
  csharp: `public int Sum(int a, int b) {
    return a + b;
}`,
  php: `function sum($a, $b) {
    return $a + $b;
}`,
  // ...add more as needed
};

export default function LanguageSelector({ language, onChange }) {
  return (
    <select
      value={language}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: "4px 12px",
        borderRadius: 6,
        border: "1px solid #334155",
        background: "#23272f",
        color: "#e5e7eb",
        fontSize: 15,
        outline: "none",
        marginLeft: "auto",
        marginRight: 0,
      }}
    >
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="cpp">C++</option>
      <option value="typescript">TypeScript</option>
      <option value="go">Go</option>
      <option value="csharp">C#</option>
      <option value="php">PHP</option>
      {/* Add more as needed */}
    </select>
  );
}
