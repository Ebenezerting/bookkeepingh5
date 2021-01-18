var token = {
	setToken: function(name, value){
		var days = 7;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},
	readToken: function(name){
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	    if (arr = document.cookie.match(reg)) {
	        return unescape(arr[2]);
	    } else {
	        return null;
	    }
	},
	delToken: function (name) {
		var exp = new Date()
		exp.setTime(exp.getTime() - 1)
		var cval = token.readToken(name)
		if(cval != null) {
			document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString()
		}
	},
}


export const setLocalStorage = (key, value) =>{
	localStorage.setItem(key, value)
}

export const getLocalStorage = (key) => {
	return localStorage.getItem(key) || ''
}

export const clearLocalStorage = () => {
	localStorage.clear()
}
export const makeRandomArr = (arrList,num) => {
	if(num>arrList.length){
		return;
	}
	let tempArr=[...arrList];
	let newArrList=[];
	for(let i=0;i<num;i++){
		let random=Math.floor(Math.random()*(tempArr.length));
		let arr=tempArr[random];
		tempArr.splice(random, 1);
		newArrList.push(arr);
	}
	return newArrList;
}
export const setPlayerGame = (gameDate) => {
	let playerGameList = sessionStorage.getItem('playerGameList')
	if(playerGameList === null){
		sessionStorage.setItem('playerGameList',JSON.stringify([gameDate]))
	}else{
		playerGameList = JSON.parse(playerGameList)
		playerGameList = playerGameList.concat([gameDate])
		playerGameList = unique(playerGameList, 'game_id')
		sessionStorage.setItem('playerGameList',JSON.stringify(playerGameList))
	}
}

export const getPlayerGameList = () => {
	let playerGameList = sessionStorage.getItem('playerGameList')
	playerGameList = JSON.parse(playerGameList)
	if(playerGameList === null){
		return []
	}else{
		return playerGameList
	}
}

export const unique = (array, key) => {
//去掉重复选取的数据
	for (let i = 0; i < array.length; i++) {
		for (let j =i+1; j <array.length; ) {
			if (array[i][key] == array[j][key] ) {
				array.splice(j, 1);
			}else {
				j++;
			}
		}
	}
	return array
}

//封装过期控制代码
export const set = (key,value) => {
	var curTime = new Date().getTime();
	localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}

export const get = (key,exp) => {
	var data = localStorage.getItem(key);
	var dataObj = JSON.parse(data);
	if (new Date().getTime() - dataObj.time>exp) {
		console.log('信息已过期');
		//alert("信息已过期")
	}else{
		//console.log("data="+dataObj.data);
		//console.log(JSON.parse(dataObj.data));
		var dataObjDatatoJson = JSON.parse(dataObj.data)
		return dataObjDatatoJson;
	}
}
export const  webCopyString = (str) => {
	var input = str;
	const el = document.createElement('textarea');
	el.value = input;
	el.setAttribute('readonly', '');
	el.style.contain = 'strict';
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	el.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = getSelection();
	var originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}
	document.body.appendChild(el);
	el.select();
	el.selectionStart = 0;
	el.selectionEnd = input.length;

	var success = false;
	try {
		success = document.execCommand('copy');
	} catch (err) { }

	document.body.removeChild(el);

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}
	return success;
}

export default token;
