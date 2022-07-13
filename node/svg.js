const fs = require('fs');
const svgs = {};
const baseUrl = 'node/assets/icons';
const iconFolders = ['system'];
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
iconFolders.forEach(categoryFolder => {
  if (categoryFolder.startsWith('.')) return;
  try {
    fs.readdirSync(`${baseUrl}/${categoryFolder}`).forEach(groupFolder => {
      if (groupFolder.startsWith('.')) return;
      const dir = `${baseUrl}/${categoryFolder}/${groupFolder}`;
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        if (!file.includes('.svg')) return;
        const svg = fs.readFileSync(`${dir}/${file}`, 'utf8');
        const name = file.replace(/.svg$/, '').replace('ic-system-', '');
        svgs[`${categoryFolder}/${groupFolder}/${name}`] =
          svg.substr(0, 5) + 'class="hb-icon__svg"' + svg.substr(3);
      });
    });
  } catch (_) {}
});
// cons
fs.writeFile(
  'src/components/molecule/icon/svg.ts',
  'const svgs = ' +
    JSON.stringify(svgs) +
    ';export default svgs as { [src: string]: string };',
  () => {
    console.log('Complete conversion of svg file to text');
  },
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
