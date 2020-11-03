class Item {
    constructor(date, title, content) {
        this.date = date;
        this.title = title;
        this.content = content;
    }
}

let totalItems = [];


function contentflash(items) {
    localStorage.clear();
    items.sort(function (item1, item2) {
        return item1.date.getTime() - item2.date.getTime();
    });
    items.forEach(function (item) {
        localStorage.setItem(String(localStorage.length), JSON.stringify(item));
    })
    let addedtimes = [];
    const contentbody = document.getElementById('contentbody');
    contentbody.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        if (!addedtimes.includes((new Date(item.date)).toLocaleDateString())) {
            contentbody.innerHTML = contentbody.innerHTML + '<div class="timestamp">' + ((new Date(item.date)).toLocaleDateString()) + '</div>'
            addedtimes.push((new Date(item.date)).toLocaleDateString());
        }
        contentbody.innerHTML = contentbody.innerHTML + '<div class="todoitem"><span class="todologo"><img src="../icon/callicon.png" class="todoicon"></span><span class="todocontent"><div class="todotitle">' + item.title + '</div><div class="todoinfo">' + item.content + '</div><div class="todotime">' + (new Date(item.date)).toLocaleString() + '</div></span><span class="todobtn"><div id="finishbtn">完成</div><div id="editbtn">删除</div></span></div>';
    }

}


window.onload = function () {
    localStorage.clear();
    let item = new Item(new Date(), 'title1', 'content1');
    let item2 = new Item(new Date(), 'title2', 'content2');
    localStorage.setItem('item', JSON.stringify(item));
    localStorage.setItem('item2', JSON.stringify(item2));
    contentflash(totalItems);
    // 	console.log(localStorage.getItem('testKey'));
    // // body...
    // var todobtn = document.getElementById('finishbtn');
    // var addItemBtn = document.getElementById('additem');
    // addItemBtn.addEventListener('click',function function_name(argument) {
    // 	// body...
    // })
    // todobtn.addEventListener("click",function() {
    // 	let testobj = {
    // 		name:'name',
    // 		content:'content',
    // 		time:1,
    // 	}
    // 	console.log(testobj);
    // 	localStorage.setItem("testKey",testobj);
    // 	var o = localStorage.getItem('testKey');
    // 	console.log("todobtn");
    // 	console.log(o);
    // })
    // localStorage.clear();

    let contentbody = document.getElementById('contentbody');
    let time1 = new Date();
    let itemtimes = [time1, time1];
    let itemtitles = ['title1'];
    let itemcontents = ['content1'];
    let additemwindow = document.getElementById('additemwindow');
    for (let i = 0; i < itemtimes.length; i++) {
        // console.log(itemtimes[i].getDay());
        // console.log("added");
    }

    var additemBtn = document.getElementById('additem');
    const confirmBtn = document.getElementById('confirmbtn');
    const cancalBtn = document.getElementById('cancalbtn');

    // console.log(additemBtn);

    additemBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'visible';
    });
    confirmBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'hidden';
        let time = document.getElementById('additemtimeinput');
        let title = document.getElementById('additemtitleinput');
        let content = document.getElementById('additemcontentinput');
        console.log(new Date(time.value).getFullYear());
        let item = new Item(new Date(time.value), title.value, content.value);
        console.log(item.date.getTime());
        totalItems.push(item);
        contentflash(totalItems);
    });
    cancalBtn.addEventListener('click', function () {
        document.getElementById('additemwindow').style.visibility = 'hidden';
    });
}