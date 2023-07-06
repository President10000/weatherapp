import React from "react";

const Rightbar = () => {
  return (
    <div className="flex flex-col   p-4">
      <nav>
        <ul className="  flex flex-row space-x-4 justify-between">
          <li className="text-gray-700">Menu Item 1</li>
          <li className="text-gray-700">Menu Item 2</li>
          <li className="text-gray-700">Menu Item 3</li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-grow">
        {/* Main content for the Leftbar */}
      </div>
    </div>
  );
};

export default Rightbar;
