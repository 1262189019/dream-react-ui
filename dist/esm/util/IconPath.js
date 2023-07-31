function importAllIcons() {
  var icons = {};
  var requireIcon = require.context(
    '../assets/icons',
    // 图标文件所在的路径（相对于当前文件）
    true,
    // 是否遍历子目录
    /\.(svg|png|jpe?g)$/, // 文件类型匹配规则
  );

  requireIcon.keys().forEach(function (filename) {
    var iconName = filename.replace(/^\.\//, '').replace(/\.(svg|png|jpe?g)$/, '');
    icons[iconName] = requireIcon(filename);
  });
  return icons;
}
var icons = importAllIcons();
export default icons;
