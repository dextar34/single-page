import React from "react";
import Container from "../components/Container";
import Pic from "../components/layer/Pic";
import Logo from '/images/fashion-hub.jpg'

const Error404 = () => {
  return (
    <div className="my-36">
      <Container>
        <div className="logo flex justify-center my-10">
          <Pic href="/" src={Logo} className={" ml-10 md:ml-0 mt-2 md:mt-0"} />
        </div>
        <div className="font-bold text-center flex flex-col gap-y-5">
          <h1 className="text-6xl text-gray-950 uppercase">Error 404</h1>
          <p className="text-3xl text-slate-700">Page not found</p>
        </div>
      </Container>
    </div>
  );
};

export default Error404;
