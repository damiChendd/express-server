// 弹窗，调用函数，在页面的正中间弹出传入的参数
// 参数为父标签的id,要显示的信息
function toast(parentId, toastInfo) {

  var node=document.createElement("DIV");
  var textnode=document.createTextNode("");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

  console.log('进入弹窗函数')
  document.getElementById(parentId).appendChild(node)
  document.getElementById('toast').innerText = toastInfo
  document.getElementById('toast').style.backgroundColor= '#666666'
}
