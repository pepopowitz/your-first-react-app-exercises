import React from 'react';

import './Page.css';

export default function Page({ children }) {
  return (
    <div className="page">
      <div className="content">{children}</div>
    </div>
  );
}
