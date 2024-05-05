import path from 'node:path'
import fs from 'node:fs'
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'node_modules', '.idea', 'public','utils']
// 文件根目录

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))
const DIR_PATH= path.resolve();
// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory()
export const set_nav = (pathname) => {
    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname)
    // 读取pathname下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath)
    // 过滤掉
    const items = intersections(files, WHITE_LIST)
    console.log('items',items)
    const prefixname=items[items.length-1].slice(0, items[items.length-1].lastIndexOf('.'));
    // getList 函数后面会讲到
    console.log(prefixname)
    return prefixname
}
