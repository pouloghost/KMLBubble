window.functions = {};

functions.fillBody = function(){
	var wrapper = window.parent.window.document.getElementById("wrapper");
	wrapper.innerHTML = window.parent.user.template;
}

function.inflate = function(data){
	for(id in data){
		var ele = window.parent.window.document.getElementById(id);
		_inflateElement(ele, data[id]);
	}
}

function _inflateElement(ele, val){
	var type = ele.tagName;
	switch(type){
		case "IMG":
		case "VIDEO":
		case "AUDIO": ele.src = val;
					break;
		case "SPAN":
		case "P":
		case "PRE":
		case "DIV": ele.innerHTML = val;
					break;
	}
}

window.onload = function(){
	if(window.parent.user.preFill){
		window.parent.user.preFill();
	}
	window.functions.fillBody();
	if(window.parent.user.postFill){
		window.parent.user.postFill();
	}
}