import React from "react";
import "../styles/Quote.css";

const Quote = () => {
  return (
    <section className="quote-box">
      <div className="quote-mark quote-left">“</div>
      <p className="quote-text">
        Power resides where men believe it resides.
      </p>
      <div className="quote-author-box">
        <p className="quote-author">-Lord Varys</p>
      </div>
      <div className="quote-mark quote-right">“</div>
    </section>
  );
};

export default Quote;
