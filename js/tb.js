// 存放拖拽的元素
let dragElement = null
function onDragStart(e) {
  // 获取当前拖拽元素
  dragElement = e.currentTarget
}
function onDragOver(e) {
  // 默认的当你dragover的时候会阻止你做drop的操作，所以需要取消这个默认
  e.preventDefault()
}
function onDrop(e) {
  // 当拖动结束的时候，给拖动div所在的位置下面的div做drop事件
  let dropElement = e.currentTarget
  if (dragElement != null && dragElement != dropElement) {
    let wrapper = document.querySelector('.wrapper')
    // 临时 div 用于存储 box
    let temp = document.createElement('ul')
    // 添加 temp 到父元素 wrapper 中
    wrapper.appendChild(temp)
    // 交换
    wrapper.replaceChild(temp, dropElement)
    wrapper.replaceChild(dropElement, dragElement)
    wrapper.replaceChild(dragElement, temp)
  }
}