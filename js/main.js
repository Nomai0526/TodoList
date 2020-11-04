class Item {
    constructor(date, title, content) {
        this.date = date;
        this.title = title;
        this.content = content;
    }
}

let totalItems = [];
let filterItems = [];


function contentflash(items) {
    items.sort(function (item1,item2) {
        return item1.date.getTime() - item2.date.getTime();
    });
    //排序
    let addedtimes = [];
    const contentbody = document.getElementById('contentbody');
    contentbody.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        if (!addedtimes.includes((new Date(items[i].date)).toLocaleDateString())) {
            contentbody.innerHTML = contentbody.innerHTML + '<div class="timestamp">' + ((new Date(items[i].date)).toLocaleDateString()) + '</div>'
            addedtimes.push((new Date(items[i].date)).toLocaleDateString());
        }
        //如果没有时间戳则添加
        contentbody.innerHTML = contentbody.innerHTML + '<div class="todoitem"><span class="todologo"><img src="../icon/callicon.png" class="todoicon"></span><span class="todocontent"><div class="todotitle">' + items[i].title + '</div><div class="todoinfo">' + items[i].content + '</div><div class="todotime">' + (new Date(items[i].date)).toLocaleString() + '</div></span><span class="todobtn"><div class="finishbtn">完成</div><div class="editbtn">编辑</div></span></div>';
    	//添加元素
    }
}

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        item.date = new Date(item.date);
        //将date字符串解析为date对象
        totalItems.push(item);
    }
    //读取本地存储

    contentflash(totalItems);
    //刷新页面

    const contentbody = document.getElementById('contentbody');
    const additemwindow = document.getElementById('additemwindow');

    const searchBar = document.getElementById('searchBar');

    const additemBtn = document.getElementById('additem');
    const clearAllBtn = document.getElementById('clearall');

    const confirmBtn = document.getElementById('confirmbtn');
    const cancalBtn = document.getElementById('cancalbtn');

    const finishBtn = document.getElementsByClass('finishbtn');
    const editBtn = document.getElementsByClass('editbtn');


    additemBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'visible';
    });
    confirmBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'hidden';
        let time = document.getElementById('additemtimeinput');
        let title = document.getElementById('additemtitleinput');
        let content = document.getElementById('additemcontentinput');
        let item = new Item(new Date(time.value), title.value, content.value);
        console.log(item.date.getTime());
        totalItems.push(item);
        localStorage.setItem(String(localStorage.length), JSON.stringify(item));
        contentflash(totalItems);
    });
    cancalBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'hidden';
    });
    searchBar.addEventListener('keyup',function () {
    	let key = this.value;
    	filterItems = totalItems.filter(function (item) {
    		if(item.title.indexOf(key)!==-1||item.content.indexOf(key)!==-1){
    			return true;
    		}
    	});
    	//修改过滤项目
    	contentflash(filterItems);
    	//重新渲染
    });

    clearAllBtn.map((item)=>{
    	item.addEventListener('click',()=>{
    	localStorage.clear();
    	totalItems = [];
    	filterItems =[];
    	contentflash(totalItems);
    })});

    finishBtn.map((item)=>{
    	item.addEventListener('click',()=>{
    	console.log('12');
    })});
}