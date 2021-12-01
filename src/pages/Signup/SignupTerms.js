import React from 'react';

export default function SignupTerms({ type, content }) {
  return (
    <li>
      <input type={type} />
      {content}
    </li>
  );
}
