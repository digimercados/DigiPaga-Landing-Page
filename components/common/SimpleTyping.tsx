import React, { useState, useEffect } from "react";

type Props = {
  texts: string[];
};

const SimpleTyping: React.FC<Props> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && display === fullText) {
      // Wait then start deleting
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && display === "") {
      // Move to next text and start typing
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay((prev) =>
          deleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, deleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, texts]);

  return <span>{display}</span>;
};

export default SimpleTyping;
