var div = document.createElement('div')
div.style.border = '1px solid red'
div.style.height = '100px'
div.style.width = '100px'
div.style.top = 'auto'
div.id = 'demo'

document.body.appendChild(div)
var x = false
var position = [0, 0]
div.onmousedown = ({ clientX, clientY }) => {
  x = true

  position = [clientX, clientY]
}
document.onmousemove = ({ clientX, clientY }) => {
  if (x === true) {
    var deltaX = clientX - position[0]
    var deltaY = clientY - position[1]
    var top = parseInt(div.style.top) || 0
    var left = parseInt(div.style.left) || 0
    div.style.top = `${top + deltaY}px`
    div.style.left = `${left + deltaX}px`
    position = [clientX, clientY]
  }

}
document.onmouseup = (e) => {
  x = false
}