import x from './x.js'
import jpg from './assets/1.jpg'

const div = document.getElementById('app')
div.innerHTML = `
<img src='${jpg}'>
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    // const lazy = import('./lazy') 异步不能直接用
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}

div.appendChild(button)