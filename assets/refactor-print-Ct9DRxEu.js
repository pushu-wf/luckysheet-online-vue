import{i as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`refactor-print`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`<h1 data-v-6c601286>print 打印模块</h1><p data-v-6c601286> 打印是协同文档重要功能，用户可以对当前文档进行打印预览、导出 PDF 文档等操作，本例在源码的基础上，进行打印模块的重构，支持sheet打印、areas打印等功能。 </p><h2 data-v-6c601286>基本使用</h2><pre class="code-block" data-v-6c601286><code data-v-6c601286>const luckysheet = window.luckysheet;

// 向外提供API接口
luckysheet.print({
    mode: string, // 打印模式，可选值为 sheet | areas | pages
    needToPreview: boolean, // 是否需要打印预览
    range: string, // 打印选区，支持标准 luckysheet 选区格式，例如 &#39;A1:B10&#39; 等格式
    printGridLine: boolean, // 是否打印网格线
});</code></pre><h2 data-v-6c601286>支持的功能</h2><ul data-v-6c601286><li data-v-6c601286>打印页码预览</li><li data-v-6c601286>打印当前工作表 <code data-v-6c601286>mode = &#39;sheet&#39;</code></li><li data-v-6c601286>打印指定选区 <code data-v-6c601286>mode = &#39;areas&#39;</code></li><li data-v-6c601286>打印指定页码 <code data-v-6c601286>mode = &#39;pages&#39;</code></li><li data-v-6c601286>打印图片 图表优化</li><li data-v-6c601286>支持打印相关设置 (是否显示网格线 | 设置页面边距，目前暂时支持这两个属性，后续考虑添加更多设置项)</li></ul><h2 data-v-6c601286>打印预览</h2><div class="image-container" data-v-6c601286><img src="/assets/print-preview-K31xUuYo.png" alt="打印预览" data-v-6c601286></div><div class="tip-box" data-v-6c601286> 打印这块确实有点复杂，大家在使用过程中，有任何问题，欢迎提交 issue，或者直接联系我哈。 </div>`,9)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-6c601286`]]);export{s as default};