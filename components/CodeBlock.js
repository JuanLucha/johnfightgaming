import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "md";

  return (
    <Highlight {...defaultProps} theme={null} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
