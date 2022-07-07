// DOM Event Model Level0: basic: HTML Element의 Event Attribute에 Event Handler(함수)를 설정하는 방식
// JavaScript Code(DOM API) 로만 작성하기
var tabBox = {
	_liSelected: null,
	init: function() {
		window.onload = this._onWindowLoad.bind(this);
	},
	_onTabClicked: function() {
		var lisSelected = document.getElementsByClassName('selected');
		lisSelected.length == 1 && (lisSelected[0].className = '');
		
		//select
		this.className = 'selected';
	},
	_onWindowLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
		
		for(var i = 0; i<liTabs.length; i++){
			liTabs[i].addEventListener("click", this._onTabClicked);
		}
	}
}; 