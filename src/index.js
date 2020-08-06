const app = document.querySelector("#app")

const div1 = document.createElement('div')
div1.innerHTML = '我是第1个页面的内容'

const div2 = document.createElement('div')
div2.innerHTML = '我是第2个页面的内容'

const div3 = document.createElement('div')
div3.innerHTML = '我是第3个页面的内容'

const div4 = document.createElement('div')
div4.innerHTML = '我是第4个页面的内容'

const div404 = document.createElement('div')
div404.innerHTML = '您输入的页面不存在'

const routeTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4
}

function route(){
    const hash = window.location.hash.substr(1) || '1'  //保底值为默认路由
    let div = routeTable[hash]

    if(!div){
        div = div404
    }//404页面

    app.innerHTML = ''
    app.appendChild(div)
}

route()

window.addEventListener('hashchange',()=>{
    route()
})