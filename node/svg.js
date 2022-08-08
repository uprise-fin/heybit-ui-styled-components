const fs = require('fs');
const svgs = {};
const hbIconName = [];
const baseUrl = 'node/assets/icons';

function write(...folder) {
  const folders = folder.join('/');
  fs.readdirSync(`${baseUrl}/${folders}`).forEach(file => {
    if (file.startsWith('.')) return;
    if (!file.endsWith('.svg')) return write(...folder, file);
    const svg = fs.readFileSync(`${baseUrl}/${folders}/${file}`, 'utf8');
    const name = file.replace(/.svg$/, '').replace('ic-system-', '');
    hbIconName.push(`${folders}/${name}`);
    svgs[`${folders}/${name}`] =
      svg.substr(0, 5) + 'class="hb-icon__svg"' + svg.substr(3);
  });
}
write();

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
  `import type {Size} from '@/components/atom/variable/type';\nexport interface HbIconProps {\n  icon: HbIconName;\n  size: Size;\n}\nexport enum HbIconName {${hbIconName
    .map((x, i) => `${i === 0 ? '\n' : ''}  '${x}' = '${x}'`)
    .join(',\n')},\n}\n`,
  () => {
    console.log('Complete conversion of type file to text');
  },
);
