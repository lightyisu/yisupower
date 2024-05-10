import path from 'node:path'
import fs from 'node:fs'

// 指定要读取的JSON文件路径
const filePath = 'elog.cache.json';
var jsonObj;
var blogbar=[]
var zhoukanbar

 


 let handle=()=>{
     zhoukanbar=jsonObj['docs'].filter((item)=>{
        return item['properties']['catalog'][0]=='zhoukan'
      })
      zhoukanbar= transformArrayToTextLinkObjects(sortByDateDesc(zhoukanbar))
      zhoukanbar=[
        {
            text:'好玩周刊',
            items:zhoukanbar
        }
      ]
      let blogbar_temp=jsonObj['docs'].filter((item)=>{
        return item['properties']['catalog'][0]!='zhoukan'
      })
      
    let blogbarYear=new Set([])
     blogbar_temp.forEach((item)=>{
        blogbarYear.add(item['properties']['catalog'][0])
    })
    blogbarYear=[...blogbarYear]
    blogbarYear=convertAndSortDesc(blogbarYear)
    
    blogbarYear.forEach((item)=>{
        blogbar.push({
            text:`${item}`,
            items:transformArrayToTextLinkObjects(sortByDateDesc(blogbar_temp.filter((item_nested)=>{
                return item_nested['properties']['catalog'][0]==item
                
                })))
        })
    })
   
  
 }

 function transformArrayToTextLinkObjects(array) {
    return array.map(item => {
      // 移除relativePath属性值中的.md后缀
      const link = item.relativePath.replace(/\.md$/, '');
  
      // 返回新的对象，包含text和link属性
      return {
        text: item.properties.title,
        link: link
      };
    });
  }
 function sortByDateDesc(posts) {
    // 使用sort方法进行排序，提供自定义的比较函数
    return posts.sort((a, b) => {
      // 将日期字符串转换为Date对象以进行比较
      const dateA = new Date(a.properties.date);
      const dateB = new Date(b.properties.date);
  
      // 如果dateA在dateB之后，返回一个负数，表示a应该排在b之前
      // 如果dateA在dateB之前，返回一个正数，表示b应该排在a之前
      // 如果日期相同，返回0，表示它们的顺序可以不变
      return dateB - dateA;
    });
  }
  function convertAndSortDesc(stringNumbersArray) {
    // 首先将字符串转换为数字
    const numbersArray = stringNumbersArray.map(str => parseInt(str, 10));
    
    // 然后进行倒序排序
    numbersArray.sort((a, b) => b - a);
    
    return numbersArray;
  }

  let data=fs.readFileSync(filePath, 'utf8')
  jsonObj = JSON.parse(data);
  handle()


  export const getfirstZK=()=>{
   
 
    return zhoukanbar[0].items[0].link
  }
export const set_sidebar = (pathname,iszhoukan=0) => {
 
  if(iszhoukan==1){
  
    return zhoukanbar
  }else{
  
    
    fs.writeFileSync('./temp.json', JSON.stringify(blogbar), 'utf8');
    return [...blogbar]
  }
    
}