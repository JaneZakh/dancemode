// const START = Date.now()
//
// function someFn() {
// 	console.log('time', Date.now() - START)
// 	console.log('args', arguments)
// }
//
// Function.prototype.delay = function(time) {
// 	return (...args) => {
// 		setTimeout(() => {
// 			this.apply(this, args)
// 		}, time)
// 	}
// }
//
//
// const f = someFn.delay(500)
//
// f('arg1', 'arg2', 1, 2)
// /////////////
//
// function sum(x) {
// 	console.log(x)
// 	return function(y) {
// 		return sum(x +y)
// 	}
// }
//
// sum(5)(4)(11)
//
// ///////
//
// const objects = (obj1, obj2) => {
// 	for (const key in obj1) {
// 		if(obj2.hasOwnProperty(key)) {
// 			obj1[key] = obj2[key]
// 		}
// 	}
// 	console.log(obj1)
// }
//
// objects(
// 	{foo: 'bar', bar: 'bar'},
// 	{bar: 'some', foo: 'new'}
// )

////

const groupBy = (arr, callback) => {
	let res = {}
	arr.forEach(el => {
		if(res.hasOwnProperty(callback(el))) {
			res[callback(el)] = [...res[callback(el)], el]
		} else {
			res[callback(el)] = [el]
		}
	})
	console.log(res)
}

groupBy([6.1, 4.2, 6.3], Math.ceil)