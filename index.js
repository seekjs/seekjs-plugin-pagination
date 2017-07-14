/**
 * Created by likaituan on 13/07/2017.
 */

exports.currentPage = 1;
exports.pageSize = 10;
exports.pageCount = 0;

// 首页
exports.go2first = function () {
	this.currentPage = 1;
	this.go2page()
};

// 上一页
exports.go2prev = function () {
	var page = +this.currentPage - 1;
	if (page > 0) {
		this.currentPage = page;
		this.go2page();
	}
};

// 下一页
exports.go2next = function () {
	var page = +this.currentPage + 1;
	if (page <= this.pageCount) {
		this.currentPage = page;
		this.go2page();
	}
};

// 末页
exports.go2last = function () {
	this.currentPage = this.pageCount;
	this.go2page();
};

// 调到某页
exports.go2page = function () {
	this.parent[this.onJump](this);
};