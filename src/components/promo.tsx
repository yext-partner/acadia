import * as React from "react";
import Markdown from 'markdown-to-jsx';

const Promo = (props:any) => {
  const { text } = props;
  return (
    <>
        <div className="section py-10 text-center bg-yellow-100">
            <Markdown>{text}</Markdown>
        </div>
    </>
  );
};

export default Promo;