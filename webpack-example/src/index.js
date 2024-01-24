import { join } from "lodash-es";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = join(["Hello", "webpack!"], ", ");

  console.log("test console");

  return element;
};

document.body.appendChild(component());
