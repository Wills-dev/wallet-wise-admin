import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen max-h-screen">
      <div className="w-full h-full flex  relative">
        <div className="absolute top-6 left-6 font-light italic">
          Wallet-wise
        </div>
        <div className="w-2/3 h-full bg-purple-50 max-lg:hidden">
          <img
            src="/assets/images/auth-img.png"
            alt="auth-image"
            className="w-full h-fuul object-cover"
          />
        </div>
        <div className="w-1/3 h-screen flex justify-center items-center max-lg:w-full">
          <div className="max-w-[400px] px-4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
