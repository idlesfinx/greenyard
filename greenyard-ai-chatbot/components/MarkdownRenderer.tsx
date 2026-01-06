import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown
        components={{
          ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1 text-gray-300" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 space-y-1 text-gray-300" {...props} />,
          li: ({node, ...props}) => <li className="mb-1" {...props} />,
          p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed text-gray-200" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
          h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-2 text-white" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-base font-bold mb-2 text-white" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-sm font-bold mb-1 text-white" {...props} />,
          code: ({node, ...props}) => <code className="bg-dark-900 px-1 py-0.5 rounded text-sm font-mono text-neon-400" {...props} />,
          a: ({node, ...props}) => <a className="text-neon-400 hover:underline" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;