export function addElements(CLASSNAME_OUTER, CLASSNAME_INNER) {
	var outerWrapper = document.createElement('div')
	var outer = null
	var inner = null
	for (var i = 0; i < 1; i++) {
		outer = document.createElement('div')
		outer.classList.add(CLASSNAME_OUTER)
		outer.classList.add('point-pre')
		outer.setAttribute('class', CLASSNAME_OUTER + ' point-pre')
		outer.setAttribute('myshow', 'hide')
		inner = document.createElement('div')
		inner.setAttribute('class', CLASSNAME_INNER)
		inner.innerHTML = `<img src="http://image.1911edu.com//1539859636" alt="">`
		outer.appendChild(inner)
		outerWrapper.appendChild(outer)
		inner = null
		outer = null
	}
	document.body.appendChild(outerWrapper)

	return outerWrapper
}

/* 获取终止点的相对于窗口的坐标 */
export function getEndCoordinate(ele) {
	var eleParent = ele.offsetParent.offsetLeft
	var bodyWidth = document.documentElement.clientWidth * 0.05
	var eleLeft = ele.offsetLeft

	var left = eleParent + bodyWidth + eleLeft
	var top = ele.offsetTop

	return [ left, top ]
}

/* 获取outer下myshow属性为hide的第一个元素 */
export function getElementMyShowHide(parentElement, CLASSNAME_SHOW_NONE) {
	var result = null
	var childElements = parentElement.getElementsByClassName(CLASSNAME_SHOW_NONE)
	result = childElements[0]
	return result
}
var outerWrapper
/* 获取outer下myshow属性为hide的第一个元素 */
export function init() {
	var CLASSNAME_OUTER = 'outer'
	var CLASSNAME_INNER = 'inner'
	// 增加小球元素
	outerWrapper = addElements(CLASSNAME_OUTER, CLASSNAME_INNER)
}

export function initAniamtion(target, event) {
	// var CLASSNAME_OUTER = 'outer'
	// var CLASSNAME_INNER = 'inner'
	// // 增加小球元素
	// var outerWrapper = addElements(CLASSNAME_OUTER, CLASSNAME_INNER)

	var endLeft = getEndCoordinate(document.getElementById('cartNum'))[0]
	var endTop = getEndCoordinate(document.getElementById('cartNum'))[1]

	// 当双击的时候,小球会从(0,0)的位置落入目标区,以下为当双击的时候,只会第一次点击的setTimeout会被清除
	// 所以只会显示一次从点击地点到目标区的运动
	// 但是依然会执行第一次的逻辑,因为内部两个setTimeout没有被清除
	clearTimeout(timer)
	var timer = setTimeout(function() {
		var left = event.clientX
		var top = event.clientY

		// 定位球元素
		var childElement = getElementMyShowHide(outerWrapper, 'point-pre')
		// var childElement = document.getElementsByClassName('point-pre')[0]

		childElement.style.left = left + 'px'
		childElement.style.top = top + 'px'
		// 计算坐标差
		var leftDifference = -(left - endLeft)
		var topDifference = -(top - endTop)
		// 开始
		childElement.classList.remove('point-pre')
		setTimeout(function() {
			childElement.getElementsByClassName('inner')[0].style.transform = `translateY(${topDifference}px)`
			childElement.style.transform = `translateX(${leftDifference}px)`
			setTimeout(function() {
				childElement.getElementsByClassName('inner')[0].setAttribute('style', '')
				childElement.setAttribute('style', '')
				childElement.classList.add('point-pre')
			}, 350)
		}, 1)
	}, 30)
}

export function initAniamtion1(target, event) {
	var endLeft = getEndCoordinate(document.getElementById('cartNum'))[0]
	var endTop = getEndCoordinate(document.getElementById('cartNum'))[1]

	var childElement = document.getElementsByClassName('point-pre')
}
