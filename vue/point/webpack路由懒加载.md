同步加载的方式
import Recommend from 'components/recommend/recommend'

异步加载的方式
const Recommend = ((resolve) => {
    import('components/recommend/recommend').then((module) => {
        resolve(module)
    })
})