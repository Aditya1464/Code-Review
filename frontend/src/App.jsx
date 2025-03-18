import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const [code, setCode] = useState(`function sum() {
  return a + b
}`);
  const [rev, setRev] = useState(``);
  const [loading, setLoading] = useState(false); // State to track loading

  async function reviewCode() {
    setLoading(true); // Set loading to true when the review starts
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setRev(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when the review is complete
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              className="editor"
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            {loading ? "Loading..." : "Review"} {/* Show loading text when loading */}
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{rev}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;