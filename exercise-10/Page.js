import React from 'react';

export default function Page({ children }) {
  return (
    <div className="page">
      <div className="content">{children}</div>
    </div>
  );
}
