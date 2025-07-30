import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";
import LanguageSelector, { defaultSnippets } from "./LanguageSelector.jsx";
import CodeEditorWithLines from "./CodeEditorWithLines.jsx";

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultSnippets["javascript"]);
  const [rev, setRev] = useState(``);
  const [loading, setLoading] = useState(false);

  function handleLanguageChange(lang) {
    setLanguage(lang);
    setCode(defaultSnippets[lang] || "");
  }

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("https://code-review-backend-3ig7.onrender.com/ai/get-review", { code });
      setRev(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main
        style={{
          display: "flex",
          height: "100vh",
          background: "linear-gradient(135deg, #18181b 0%, #23272f 100%)",
          color: "#e5e7eb",
          fontFamily: '"Fira code", "Fira Mono", monospace',
        }}
      >
        <div
          className="left"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "rgba(24,24,27,0.98)",
            borderRight: "1px solid #23272f",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            minWidth: 0,
          }}
        >
          <div
            className="code"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginLeft: 16, marginTop: 10, marginBottom: 2, marginRight: 10}}>
              <label
                htmlFor="editor"
                style={{
                  fontWeight: 600,
                  color: "#38bdf8",
                  fontSize: 20,
                  textAlign: "left",
                  marginRight: 16,
                  marginBottom: 0,
                }}
              >
                Code Editor
              </label>
              <LanguageSelector language={language} onChange={handleLanguageChange} />
            </div>
            <CodeEditorWithLines
              code={code}
              setCode={setCode}
              language={language}
            />
          </div>
          <div
            className="review"
            onClick={reviewCode}
            style={{
              background: "linear-gradient(90deg, #6366f1, #06b6d4)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 17,
              border: "none",
              borderRadius: 8,
              padding: "10px 10px",
              textAlign: "center",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 2px 8px rgba(30,64,175,0.18)",
              transition: "background 0.2s, box-shadow 0.2s",
              opacity: loading ? 0.7 : 1,
              userSelect: "none",
            }}
          >
            {loading ? "Loading..." : "Review"}
          </div>
        </div>
        <div
          className="right"
          style={{
            flex: 1,
            padding: "10px 40px 40px 32px",
            background: "rgba(30,41,59,0.98)",
            minWidth: 0,
            overflowY: "auto",
            borderRadius: "0 18px 18px 0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          <label
            style={{
              fontWeight: 600,
              marginBottom: 8,
              color: "#38bdf8",
              fontSize: 20,
              textAlign: "left",
              display: "block",
            }}
          >
            Review Result
          </label>
          <div
            style={{
              background: "#18181b",
              borderRadius: 8,
              padding: 18,
              minHeight: "88%",
              color: "#e5e7eb",
              fontSize: 15,
              border: "1px solid #334155",
              boxShadow: "0 2px 8px rgba(30,64,175,0.08)",
              overflow: "hidden",
              marginTop: 0,
              height: 350,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                overflowY: "auto",
                flex: 1,
                minHeight: 0,
              }}
            >
              <Markdown rehypePlugins={[rehypeHighlight]}>{rev}</Markdown>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
