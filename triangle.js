const accuracy = 1e-6;
function getTriangleType(a, b, c) {
	//判断输入类型
	//判断是否有负数
	//判断是否构成三角形
	//是否等边
	//是否等腰
	//是否直角 =>等腰直角
	//锐角/钝角三角形
	//普通三角形
	// console.log(typeof a);
	// console.log(typeof b);
	// console.log(typeof c);
	var sorted_edge = [a, b, c];
	sorted_edge[0] = Math.min(a, b, c);
	sorted_edge[2] = Math.max(a, b, c);
	if ((b >= a >= c) || (c >= a >= b)) {
		sorted_edge[1] = a;
	}
	else if ((a >= b >= c) || (c >= b >= a)) {
		sorted_edge[1] = b;
	}
	else if ((a >= c >= b) || (b >= c >= a)) {
		sorted_edge[1] = c;
	}
	if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
		return "输入类型错误";
	}
	if (!(a > 0 && b > 0 && c > 0)) {
		return "边必须为正数"
	}
	if (!(a + b > c && b + c > a && a + c > b)) {
		return "不能构成三角形";
	}
	if ((Math.abs(a * a + b * b - c * c) < accuracy) || (Math.abs(a * a + c * c - b * b) < accuracy) || (Math.abs(b * b + c * c - a * a) < accuracy)) {
		if ((Math.abs(a - b) < accuracy) || (Math.abs(b - c) < accuracy) || (Math.abs(a - c) < accuracy)) {
			return "等腰直角三角形";
		}
		return "直角三角形";
	}
	if (a == b && b == c) {
		return "等边三角形";
	}
	if (a == b || b == c || a == c) {
		if (Math.pow(sorted_edge[0], 2) + Math.pow(sorted_edge[1], 2) - Math.pow(sorted_edge[2], 2) > accuracy) {
			return "等腰锐角三角形"
		}
		if (Math.pow(sorted_edge[2], 2) - Math.pow(sorted_edge[0], 2) - Math.pow(sorted_edge[1], 2) > accuracy) {
			return "等腰钝角三角形"
		}
		return "等腰三角形";
	}
	if (Math.pow(sorted_edge[0], 2) + Math.pow(sorted_edge[1], 2) - Math.pow(sorted_edge[2], 2) > accuracy) {
		return "锐角三角形"
	}
	if (Math.pow(sorted_edge[2], 2) - Math.pow(sorted_edge[0], 2) - Math.pow(sorted_edge[1], 2) > accuracy) {
		return "钝角三角形"
	}
	return "普通三角形";
}

module.exports = getTriangleType;


