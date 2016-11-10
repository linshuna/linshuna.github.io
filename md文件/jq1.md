#正则表达式
>注意点:search,match,replace是可以用正则表达式
>>正则表达式是有.test事件
>>>match返回的是数组
>

* 1.什么是正则表达式
		它是对<mark>字符串</mark>执行模式匹配的强大工具
    	ps:把规则说给计算机听
    var reg = /abc/g 属性"g"、"i" 和 "m" 分别用于指定全局匹配、区分大小写的匹配和多行匹配
    var reg = new RegExp("abc","g")
    reg.test(str) 方法用于检测一个字符串是否匹配某个模式.
    如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。

* 2.字符串方法结合正则使用
    search：检索与正则表达式相匹配的值。
	match：找到一个或多个正则表达式的匹配。
	replace：替换与正则表达式匹配的子串。
	split

* 3.正则表达式
	元字符
	. :查找单个字符，除了换行和行结束符。(要注意,如果是查找句号(即是.)就要用到转义符)
	\w:查找单词字符。(字母和数字)
	\d:查找数字。
	\s:查找空白字符。(空格)
	\b:匹配单词边界
	\u:匹配汉字

	方括号(查找的范围)
	[abc]   :查找方括号之间的任何字符。[a-c]
	[^abc]:查找任何不在方括号之间的字符。
	[0-9]:查找任何从 0 至 9 的数字。
	[a-z]:查找任何从小写 a 到小写 z 的字符。
	[A-z]:查找任何从大写 A 到小写 z 的字符。

	量词
	n+  :匹配任何包含至少一个 n 的字符串。
	n*:匹配任何包含零个或多个 n 的字符串。
	n?:匹配任何包含零个或一个 n 的字符串。(区号202-)
	n{X}:匹配包含 X 个 n 的序列的字符串。
	n{X,Y}:匹配包含 X 或 Y 个 n 的序列的字符串。
	n$:匹配任何结尾为 n 的字符串。(一定要)
	^n:匹配任何开头为 n 的字符串。
	
* 其他
	逻辑“或”  |：a|b|c 匹配 a 或 b 或 c 中任意一个
###实例
* 查找替换
* 验证月份
* 验证日期
* 去空格(\trim)
* 单词边界(\s)
* 匹配中文(\u4e00-\u9fa5)

```javascript
//实例1:查找替换

//静态界面
查找内容:<br>
	<input type="text" id="search"><br>
	替换的内容:<br>
	<input type="text" id="replace">
	<input type="button" value="替换" class="btn">
	<div class="con">
		内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c
		内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c
		内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c
		内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c内容a内容b内容c
	</div> 
	//js
	//获取元素
	var con = document.querySelector(".con");
	var search = document.getElementById("search");
	var replace = document.getElementById("replace");
	var btn = document.querySelector(".btn");
	
	btn.onclick = function(){
		var str = con.innerText;//获取div内容 不用inerHTML是会把标签也当成字符串,把标签也替换
		/*方法1*/
		var reg = new RegExp(search.value,"g");//正则要在点击里面写
		str = str.replace(reg,"<span>"+replace.value+"</span>");//replaceAll
		
		// 方法2
		/*str = str.split(search.value).join("<span>"+replace.value+"</span>");//join把逗号换成replace.value拼接	*/
		//方法3:indexOf查找 subString()截取
		/*var index = 0;
		var str2 = "";
		var searchV = search.value;
		while(str.indexOf(search.value,index)>-1){
			str2 += str.substring(index,str.indexOf(search.value,index))+"<span>"+replace.value+"</span>";
			index = str.indexOf(search.value,index)+searchV.length;
		}*/
		con.innerHTML = str2+str.substring(index);//第二个参数不加是表示最后
	}
```



```javascript
//实例2:验证月份
//静态页面
月份<input type="text"><span></span>
//js
var input = document.querySelector("input");
var span = document.querySelector('span');
input.onchange = function(){
	var str = input.value;
	var reg = /^(0?[1-9]|1[0-2])$/;//^和$是表达只有2位数
	//var reg = /^(0?[1-9]|[12]\d|3[01])$/;// /^(0?[1-9]|[1-2][0-9]|3[0-1])$/
	if (reg.test(str)) {
		span.innerHTML = "正确";
	}else{
		span.innerHTML = "错误";
	}
}

```

```javascript
//实例3:验证日期
var input = document.querySelector("input");
var span = document.querySelector('span');
input.onchange = function(){
	var str = input.value;
	//var reg = /^(0?[1-9]|1[0-2])$/;//^和$是表达只有2位数
	var reg = /^(0?[1-9]|[12]\d|3[01])$/;// /^(0?[1-9]|[1-2][0-9]|3[0-1])$/
	if (reg.test(str)) {
		span.innerHTML = "正确";
	}else{
		span.innerHTML = "错误";
	}
}
```

```javascript
//实例4:去空格
	//去空格trim  str = str.trim();
	//var div = document.getElementsByTagName("div")[0];
	//var div = document.getElementsByTagName(" div ")[0];//undefinde
	function $(str){
		// str = str.trim();
		str = trim(str);
		return document.getElementsByTagName(str);
	}
	//字符串前后去空格方法
	function trim(str){
		var reg = /^\s*|\s*$/g;//前后的空格可有可无 \s表示空格
		return str.replace(reg,"");
	}
	console.log($(" div  "));
```
	
```javascript
//实例5:去边界(\b)
var input = document.querySelector("input");
var span = document.querySelector('span');
var con = document.querySelector(".con");

// var reg = /\bred\b/;
// var str = "\\dhdf";
// span.innerHTML = str;
input.onchange = function () {
	/*var reg = new RegExp("\\b"+this.value+"\\b");

	var bol = reg.test(str);
	if (bol) {
		span.innerHTML = "有";
	}else{
		span.innerHTML = "没有";
	}*/
	//var reg = /\bto\b/g;// \b是单词边界  /\./g是找到句号
	var reg = new RegExp("\\b"+this.value+"\\b","g");
	var str = con.innerText;
	con.innerHTML = str.replace(reg,"<span>"+this.value+"</span>");//^ $是
}
```	

```javascript
//实例6:匹配中文
var input = document.querySelector("input");
	var span = document.querySelector('span');
	//匹配中文\u4e00-\u9fa5
	input.onchange = function(){
		var reg = /[u4e00-\u9fa5]/g;//[^]是除了中括号里面的内容  /^([^\u4e00-\u9fa5]\w){5,20}$/   /^(\w){5,20}$/    \w是包括由字母和数字和下划线,其他的不能
		var str = this.value;
		span.innerHTML = str.match(reg).length;
	}
```

#jQuery
* 什么是JQ  网址:http://jquery.cuishifeng.cn/(官网)
	1.jQuery 是一个 JavaScript 库。
	2.jQuery 极大地简化了 JavaScript 编程。
	3.jQuery 很容易学习。
* jQuery的优势
	轻量级,
	强大的选择器,
	出色的DOM操作,
	可靠的事件处理机制,
	完善的Ajax(异步处理),
	出色的浏览器兼容性,
	链式操作方式,
	丰富的插件支持,
	完善的文档,
	开源
	
>注意点:jq第三版本是先执行window.onload = function(){},再执行$(document).ready(function(){})
>>jq里面的for循环,已经用函数封装好了,不需要再写for循环


```javascript
window.onload = function(){//先执行
		var div = document.getElementById("d1");
		alert("onload");
	}
$(function(){
		var div = document.getElementById("d1");
		alert("ready");
	})	
//ready onload	
```
##选择器
>看手册
##jQ原生转换为jq
```javascript
	$(function() {
	// $("li").css("background","green");
	console.log($("li"));//组
	//下面的jq转原生对象
	// $("li")[2].style.background = "green";//原生的方法
	$("li").get(2).style.background = "red";
	//原生转jq对象
	var l5 = document.querySelector(".l5");
	// l5.css("background","yellow");元素转不了jq
	$(l5).css("background","yellow");//原生转jq
	})
```
##尺寸位置
>注意点:innerWidth innerHeight都是方法
>>innerWidth()/innerHegiht()包括内边距,不包括边框
>>>outerWidth()/outerHeight()包括边框和内边距

```javascript
var $div = $(".wrap div");
var $wrap = $(".wrap");
//获取div宽高样式的宽和高(注意点),不包括border和padding
console.log("div的宽"+$div.width());
console.log("div的宽"+$div.width(300));//获取完之和,可以修改
//css获取最终样式
console.log($div.css("width"));
console.log("div的高"+$div.height());
console.log("wrap的宽"+$wrap.width());
console.log("wrap的高"+$wrap.height());
//获取div实际宽高,包括边框和内边距,包括边框和内边距
console.log("div的宽"+$div.outerWidth()+"div的高"+$div.outerHeight);
//获取div的宽高,包括内边距,不包括边框
console.log("div的宽"+$div.innerWidth()+"div的高"+$div.innerHeight());
//根据position获取根据父级的left和top值的,相对原生offsetLeft,offsetTop
console.log("div:posiotion:"+$div.position().left);
//offset获取根据距离窗口的left和Top值的位置值
console.log("div:offetTop:"+$div.offset().top)
```
##tab切换
```javascript
	var $input = $("input");
	var $div = $("div");
	$input.on("click", function(){
		$input.removeClass("select");
		$(this).addClass("select");
		/* $div.css("display","none");
		$div.eq($(this).index()).css("display","block");*/
		$div.hide();
		$div.eq($(this).index()).show();
		// $div.fadeOut(500);
		// $div.eq($(this).index()).fadeIn(500);
		$div.slideUp(500);
		$div.eq($(this).index()).slideDown(500);
	})
```	