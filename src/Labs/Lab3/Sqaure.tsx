// basically telling how to define wrappewr elements using nodes. in this one, we are defining a sqaure wrapper elelment, which sqaures anything in between its parameters

import React, { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return <span id="wd-square">{num * num}</span>;
}
