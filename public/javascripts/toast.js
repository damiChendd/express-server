// 弹窗，调用函数，在页面的正中间弹出传入的参数
// 参数为父标签的id,要显示的信息
function toast(parentId,toastInfo) {
  var node = document.createElement('div');
  var textnode = document.createTextNode(toastInfo);
  node.appendChild(textnode);
  document.getElementById(parentId).appendChild(node);
  node.style.position = 'fixed';
  node.style.top = '50%';
  node.style.left = '50%';
  node.style.backgroundColor = '#666666';
}
