const fs = require('fs');
const path = require('path');

// 定义要删除的文件夹和文件路径
const foldersToDelete = [
    './docs/2023',
    './docs/2024',
    './docs/zhoukan'
];
const filesToDelete = [
    'elog.cache.json'
];

// 检查并删除文件夹
foldersToDelete.forEach(folder => {
    if (fs.existsSync(folder)) {
        const files = fs.readdirSync(folder);
        if (files.length > 0) {
            console.log(`文件夹 ${folder} 不为空，正在删除其内容...`);
            files.forEach(file => {
                const curPath = path.join(folder, file);
                if (fs.statSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
        }
        fs.rmdirSync(folder);
        console.log(`文件夹 ${folder} 已被删除`);
    } else {
        console.log(`文件夹 ${folder} 不存在`);
    }
});

// 检查并删除文件
filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`文件 ${file} 已被删除`);
    } else {
        console.log(`文件 ${file} 不存在`);
    }
});

// 递归删除文件夹
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            const curPath = path.join(folderPath, file);
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

console.log('清理完成');