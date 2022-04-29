const fs = require("fs");
const svgs = {};
// const svgs = (() =>
//   fs
//     .readFile("node/assets/icons")
//     .keys()
//     .reduce(
//       (a, x) => ({
//         ...a,
//         [x.substring(2)]: require(`./assets/icons${x.substring(1)}`),
//       }),
//       {}
//     ))();
// fs.readFile(
//   "node/assets/icons/ic-account-clear-24-black.svg",
//   "utf8",
//   (a, b) => {
//     console.log(a, b);
//   }
// );
const files = fs.readdirSync("node/assets/icons/");
files.forEach((v) => {
  if (!v.includes(".svg")) return;
  const svg = fs.readFileSync(`node/assets/icons/${v}`, "utf8");
  svgs[v] = svg.substr(0, 5) + 'class="hb-icon__svg"' + svg.substr(3);
});
// console.log("dddd", svgs);
fs.writeFile(
  "src/components/hb-icon/svg.ts",
  "const svgs = " +
    JSON.stringify(svgs) +
    ";export default svgs as { [src: string]: string };",
  () => {
    console.log("Complete conversion of svg file to text");
  }
);
// });
// fs.readdir("node/assets/icons/", (err, files) => {
//   if (err) console.log(err);
//   else {
//     const svgs = files.reduce((a, x) => {
//       if (!x.includes(".svg")) return a;
//       console.log(1);
//       fs.readFileSync(`node/assets/icons/${x}`, "utf8", (err, svgCode) => {
//         console.log(2);
//         console.log(svgCode);
//       });
//       console.log(3);
//       return {
//         ...a,
//         [x.substring(2)]: require(`node/assets/icons/${x.substring(1)}`),
//       };
//     }, {});
//     console.log(svgs);
//     // fs.writeFile("src/icons.ts", svgs, () => {
//     //   console.log("complete");
//     // });
//   }
// });
