const vscode = require('vscode')

function activate(context) {
    // 1: 这里执行插件被激活时的操作
    console.log('welcome to elife js code Snippets plugin')
    // 1: 定义了一个命令(vscode.commands)
    // 2: elife.elifeJs 可以把它当做id
    const disposable = vscode.commands.registerCommand('elife.elifeJs', function() {
        // 3: 触发了一个弹出框
        vscode.window.showInformationMessage('Hi William, this is the first popup window')
    })
    // 4: 把这个对象放入上下文中, 使其生效
    context.subscriptions.push(disposable)
}

// 5: 插件被销毁时调用的方法, 比如可以清除一些缓存, 释放一些内存
function deactivate() {}

// 6: 导出
module.exports = {
    activate,
    deactivate,
}
