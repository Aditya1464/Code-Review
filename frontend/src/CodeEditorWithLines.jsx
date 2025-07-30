import React from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";

export default function CodeEditorWithLines({ code, setCode, language }) {
return (
    <div style={{ margin: 10, height: "80%" }}>
        <Editor
            id="editor"
            className="editor"
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)}
            padding={12}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                border: "1px solid #334155",
                borderRadius: "8px",
                background: "#18181b",
                color: "#e5e7eb",
                minHeight: "100%",
                outline: "none",
                marginBottom: 0,
                boxShadow: "0 2px 8px rgba(30,64,175,0.08)",
                transition: "box-shadow 0.2s",
                maxHeight: "100%",
                overflow: "auto",
                whiteSpace: "pre",
                flex: 1,
                height: "100%",
            }}
        />
    </div>
);
}
