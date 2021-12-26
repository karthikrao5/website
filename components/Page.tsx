import React from "react";

const Page: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="">{children}</div>
    </div>
  );
};

export default Page;
