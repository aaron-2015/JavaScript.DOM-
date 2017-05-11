/**
 * Created by aaron on 2017/5/11.
 */

/*添加启动函数*/
function addLoadEvent(func){
    var oldLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldLoad();
            func();
        }
    }
}

/*在目标元素后插入元素*/
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;

    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

/*给元素添加class name*/
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else  {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;

        element.className = newClassName;
    }
}

/*添加高亮*/
function highlightPaage() {

    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    var headers = document.getElementsByTagName('header');
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName('a');
    if (links.length == 0) return false;
    var linkUrl;
    for (var i = 0; i < links.length; i++) {
        linkUrl = links[i].getAttribute('href');
        if (window.location.href.indexOf(linkUrl) != -1){
            addClass(links[i],'here');

            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}

addLoadEvent(highlightPaage);


