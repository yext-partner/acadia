import * as React from "react";

  const Insurances = (props:any) => {
    const { list } = props;
    const listItems = list.map((item:any) => <div className="text-xl" key={item}>{item}</div>);
    return (
      <>
        <div className="section">
          <h2 className="mb-4">Insurances Accepted</h2>
          <div className="pl-6 space-y-2">{listItems}</div>
        </div>
      </>
    );
  };
  
  export default Insurances;