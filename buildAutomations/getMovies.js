// site:
// http://www.imdb.com/list/ls003456810/

var imarr = Array.prototype.slice.call(document.getElementsByClassName('loadlate zero-z-index'));

var mvims = {};

imarr.map(function (i) {
    var t=i.title.slice(8).trim();
    mvims[t] = {
        title: t, src: i.src, width: i.width, height: i.height
    };
});

var desc = Array.prototype.slice.call(document.getElementsByClassName('item_description'));

var mvs = {};

var count = 0;

var mvarr = [];

for (prop in mvims) {
    mvarr.push({
        title: prop, src:mvims[prop].src, description: desc[count].textContent
    });
    count++;
}

console.log(mvarr);

mvs['movies'] = mvarr;



