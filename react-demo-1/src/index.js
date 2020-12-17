import React from "react";
import ReactDOM from "react-dom";

// // react 原始写法
// const div = React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, React.createElement("span", null, "Hi"))
// );

// react 标签写法
const Header = <header>header</header>;
const Header2 = function (props) {
  return <header>header2 {props.name}</header>;
};
const Bottom = <div>bottom</div>;
const Bottom2 = function () {
  const [n, setN] = React.useState(0); // 析构赋值
  return (
    <div>
      {n}
      <button
        onClick={function () {
          setN(n + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
class Bottom3 extends React.Component {
  render() {
    return <div>bottom 3</div>;
  }
}
const div2 = (
  <div>
    {Header}
    {Header2({ name: "Andrew" })}
    <Header2 name="Leo" />
    <p>
      <span>Hi</span>
    </p>
    {Bottom}
    <Bottom2 />
    <Bottom3 />
  </div>
);

console.log(div2); // 虚拟的 element

ReactDOM.render(div2, document.getElementById("root"));

// =======================================================

// // 标签流
// const div1 = (
//   <div>
//     <p>
//       <span>Hi</span>
//     </p>
//   </div>
// );

// // 标签流转换称函数
// const div = t("div", t("p", t("span", "Hi")));

// document.body.appendChild(div);

// function t(tagName, children) {
//   const element = document.createElement(tagName);
//   if (children) {
//     if (typeof children === "string") {
//       var childElement = document.createTextNode(children);
//       element.appendChild(childElement);
//     } else {
//       element.appendChild(children);
//     }
//   }
//   return element;
// }
