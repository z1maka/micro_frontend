import React, { useEffect, useRef } from "react";
import { mount } from "packages/marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
