import{i as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`optimize`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`<h1 data-v-0e533220>项目其他优化</h1><h2 data-v-0e533220>1. 拓展配置项</h2><pre class="code-block" data-v-0e533220><code data-v-0e533220>const options = {
    // ... other config,
    // 其他拓展项
    imageMode: &quot;float&quot;, // 添加图片时，默认的图片显示方式  &#39;cell&#39; | &#39;float&#39;
    printDevicePixelRatio: 4, // 数值越大，打印越清晰，但绘制时间更长，请平衡性能
    customShortcuts: [], // 自定义快捷键
    printPreview: true, // 是否打印预览，默认 true
    remoteSelectOptions: {}, // 远程选区配置项
    cellProtectOptions: {}, // 单元格保护配置项
    menuHandler: {}, // 自定义菜单
    showlogo: true, // 是否显示 logo，默认 true
    showmenu: true, // 是否显示菜单按钮，默认 true
    requestHeaders: {}, // 自定义请求头
    // 剩下其他的，都是官网的配置项，请查阅 <a href="https://dream-num.github.io/LuckysheetDocs/zh/guide/config.html#%E9%85%8D%E7%BD%AE%E9%A1%B9" target="_blank" data-v-0e533220>配置项</a>

    // 如果需要拓展其他功能，请自行处理，或者联系作者！
};</code></pre><h2 data-v-0e533220>2. BUG 修复</h2><ol start="1" data-v-0e533220><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/af3c5837f8bec8a8cf4d261cbc8c9416d19902e1" target="_blank" data-v-0e533220>#Fix 修复多人协同提示框显示异常</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/5212b82c90595ff324c86db56e5ec25b88912d38" target="_blank" data-v-0e533220>#Fix 修复同用户 ID 刷新后光标无法实现协同</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/c121bcd389b4f8ecef00e3570cda9aea27e7333d" target="_blank" data-v-0e533220>#Fix 修复公式链相关协同消息传递</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/72e52419ce0168c352b0ed78e182832426b7bdda" target="_blank" data-v-0e533220>#Feat 批注导入实现、完善源码对批注的识别</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/3f89fff92722ab1631c6c5976b307eb37f83f1d1" target="_blank" data-v-0e533220>#Feat 优化 chartmix/vchart 数据联动及实现 server 数据更新存储记录</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/09147f0c76cbd0c94b2e358d8045282f7dba165d" target="_blank" data-v-0e533220>#Fix 紧急修复初始化 sheet 时，返回数据 celldata f =&#39;&#39; 时， formula 判断异常，导致双击清空数据</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/232103c62df81e7cec3abd2b19e986d1ffad73d5" target="_blank" data-v-0e533220>#Fix 修复删除列后撤销协同不更新 BUG</a></li><li data-v-0e533220><a href="https://gitee.com/wfeng0/luckysheet-crdt/commit/33274ef5e1a7462b4c4670bbd700d1f1dcba53fa" target="_blank" data-v-0e533220>#Fix 修复 inlineStr 富文本数据复制粘贴异常 BUG</a></li></ol><div class="warning-box" data-v-0e533220><p data-v-0e533220><strong data-v-0e533220>warning:</strong></p><ol data-v-0e533220><li data-v-0e533220>如果需要拓展功能，请先自行实现，实现不了，再联系作者！</li><li data-v-0e533220>扩展功能时，需要注意代码的可维护性和可扩展性，避免修改核心代码。</li><li data-v-0e533220>请注意代码的开源协议，任何侵权行为，均与作者无关。</li></ol></div>`,6)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-0e533220`]]);export{s as default};