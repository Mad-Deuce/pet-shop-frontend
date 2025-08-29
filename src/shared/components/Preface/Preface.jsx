import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

import readme from "/README.md";

import styles from "./Preface.module.css";

export default function Preface({ className }) {
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    fetch(readme)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  const fullClassName = `${styles.preface} ${className}`;
  return (
    <div className={fullClassName}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}
