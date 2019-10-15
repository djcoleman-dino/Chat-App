import React from 'react';
import Footer from './Footer';

export default function Landing() {
  return (
    <div>
      <div className="top-cta">
        <h1>Send messages to your customers</h1>
        <p>Chat with your customers using Chatty</p>
        <button>Create an account</button>
      </div>

      <div className="middle-cta">
        <h3>Features of chatty</h3>
        <ul>
          <li>Lorem lorem ipsem</li>
          <li>Lorem lorem ipsem</li>
          <li>Lorem lorem ipsem</li>
          <li>Lorem lorem ipsem</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

