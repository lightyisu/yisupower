import path from 'node:path'
import fs from 'node:fs'

// 文件根目录
const DIR_PATH= path.resolve();


console.log(DIR_PATH)
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'node_modules', '.idea', 'public','utils','zhoukan']


// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))
//时间倒序
function sortByTextDescending(arr) {
    // 比较函数，根据对象的text属性进行倒序排序
    function compare(a, b) {
        // 将text属性转换为数字，如果转换失败则按字符串比较
        const numA = Number(a.text);
        const numB = Number(b.text);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numB - numA; // 数字比较
        } else {
            return b.text.localeCompare(a.text); // 字符串比较
        }
    }

    // 对数组进行排序
    arr.sort(compare);

    return arr;
}

// 把方法导出直接使用
function getList(params, path1, pathname) {
    // 存放结果
    const res = []
    // 开始遍历params
    for (let file in params) {
        // 拼接目录
        const dir = path.join(path1, params[file])
        // 判断是否是文件夹
        const isDir = isDirectory(dir)
        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数
            const files = fs.readdirSync(dir)
            res.push({
                text: params[file],
                collapsible: true,
                items: getList(files, dir, `${pathname}/${params[file]}`),
            })
        } else {
            // 获取名字
            const name = path.basename(params[file])
            const prefixname=name.slice(0, name.lastIndexOf('.'));
            // 排除非 md 文件
            const suffix = path.extname(params[file])
            if (suffix !== '.md') {
                continue
            }
            res.push({
                text: prefixname,
                link: `${pathname}/${prefixname}`,
            })
        }
    }
  
    return sortByTextDescending(res)
}

export const set_sidebar = (pathname,iszhoukan=0) => {
    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname)
    // 读取pathname下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath)
    // 过滤掉
    const items = intersections(files, WHITE_LIST)
    console.log(getList(items, dirPath, ''))
    // getList 函数后面会讲到

    if(iszhoukan){
        console.log('is zhoukan!')
        return getList(items, dirPath, '/zhoukan')
    }else{
       return getList(items, dirPath, '')
    }
    
}