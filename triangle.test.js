var getTriangleType = require("./triangle");
var expect = require('chai').expect;

describe('三角形类型判断测试', function () {
	//从excel读入测试用例
	//将测试报告导出到html
	it('类型输入错误时提醒输入错误', function () {
		expect(getTriangleType("excuse", 23, 45)).to.be.equal("输入类型错误");
	});
	it('输入负数时提醒输入错误', function () {
		expect(getTriangleType(-1, 4, 5)).to.be.equal("边必须为正数");
	});
	it('三边相等应该是等边三角形', function () {
		expect(getTriangleType(3, 3, 3)).to.be.equal("等边三角形");
	});
	it('构成直角三角形时输出结果', function () {
		expect(getTriangleType(3, 4, 5)).to.be.equal("直角三角形");
	});
	it('应该判断直角三角形类型', function () {
		expect(getTriangleType(1, 1, Math.sqrt(2))).to.be.equal("等腰直角三角形");
	});
	it('判断等腰三角形类型（锐角）', function () {
		expect(getTriangleType(3, 3, 4)).to.be.equal("等腰锐角三角形");
	});
	it('判断等腰三角形类型（钝角）', function () {
		expect(getTriangleType(4, 4, 7)).to.be.equal("等腰钝角三角形");
	});
	it('三遍不能构成三角形时输出错误', function () {
		expect(getTriangleType(23, 45, 21)).to.be.equal("不能构成三角形");
	});
	it('只是普通的三角形', function () {
		expect(getTriangleType(2, 3, 4)).to.be.equal("普通三角形");
	});
});
