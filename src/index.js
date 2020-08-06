const app = document.querySelector('#app')

const div1 = document.createElement('div')
div1.innerHTML = `
    <br/>
    我是第1个页面的内容，我有两个路由
    <a class="link" href="/1/1">查看1.1页面</a>
    <a class="link" href="/1/2">查看1.2页面</a>
`
const div11 = document.createElement('div')
div11.innerHTML = '我是1.1页面的内容'
const div12 = document.createElement('div')
div12.innerHTML = '我是1.2页面的内容'

const div2 = document.createElement('div')
div2.innerHTML = `
    <br/>
    我是第2个页面的内容，我有两个路由
    <a class="link" href="/2/1">查看2.1页面</a>
    <a class="link" href="/2/2">查看2.2页面</a>
    `
const div21 = document.createElement('div')
div21.innerHTML = '我是2.1页面的内容'
const div22 = document.createElement('div')
div22.innerHTML = '我是2.2页面的内容'

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

const routeTable2 = {
    '1/1': div11,
    '1/2': div12,
    '2/1': div21,
    '2/2': div22
}

const hashTable = {
    1: routeTable,
    2: routeTable2
}//不同的层数对应不同的 routeTable

function route(table){
    const pathname = window.location.pathname.substr(1) || '1'
    let div = table[pathname]

    if(!div){
        div = div404
    }

    app.innerHTML = ''
    app.appendChild(div)
}

document.body.addEventListener('click', (e)=>{
    e.preventDefault()
    const el = e.target
    if(el.tagName === 'A' && el.matches('.link')){
        const href = el.getAttribute('href')
        window.history.pushState(null, '', href)
        onStateChange()
    }
})

route(routeTable)

function onStateChange(){
    const pathname = window.location.pathname.substr(1) || '1'
    const pathArray = pathname.split('/')
    const table = hashTable[pathArray.length]
    route(table)
}

