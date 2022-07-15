const fs = require('fs');
const svgs = {};
const iconType = {
  iconCategory: ['system'],
  iconStyle: ['filled', 'outline'],
};
const iconName = [];
const baseUrl = 'node/assets/icons';
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

iconType.iconCategory.forEach(categoryFolder => {
  if (categoryFolder.startsWith('.')) return;
  iconType.iconStyle.forEach(groupFolder => {
    if (groupFolder.startsWith('.')) return;
    const dir = `${baseUrl}/${categoryFolder}/${groupFolder}`;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (!file.includes('.svg')) return;
      const svg = fs.readFileSync(`${dir}/${file}`, 'utf8');
      const name = file.replace(/.svg$/, '').replace('ic-system-', '');
      iconName.push(`${categoryFolder}/${groupFolder}/${name}`);
      svgs[`${categoryFolder}/${groupFolder}/${name}`] =
        svg.substr(0, 5) + 'class="hb-icon__svg"' + svg.substr(3);
    });
  });
});
fs.writeFile(
  'src/components/molecule/icon/svg.ts',
  'const svgs = ' +
    JSON.stringify(svgs) +
    ';export default svgs as Record<string, string>;',
  () => {
    console.log('Complete conversion of svg file to text');
  },
);
fs.writeFile(
  'src/components/molecule/icon/type.ts',
  Object.entries(iconType)
    .map(([key, value]) => {
      return `export type ${key[0].toUpperCase()}${key.substring(1)} = ${value
        .map(x => "'" + x + "'")
        .join(' | ')}`;
    })
    .join(';\n') +
    `;\nexport enum IconName {${iconName
      .map(x => `'${x}' = '${x}'`)
      .join(',\n')}}` +
    ';',
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
