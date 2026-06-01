import{i as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`refactor-drawmain`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`<h1 data-v-d9be4153>重写 drawmain</h1><p data-v-d9be4153><code data-v-d9be4153>luckysheet draw.js</code> 是核心绘制模块，负责绘制单元格、文本等关键节点，为了解决源文件中参数传递异常、绘制逻辑混乱等问题，需要重写 draw.js 模块。 </p><div class="image-container" data-v-d9be4153><img src="/assets/cell-success-D7QKFWpF.png" alt="drawmain" data-v-d9be4153></div><h2 data-v-d9be4153>优化点</h2><h3 data-v-d9be4153>1. 合并参数对象</h3><pre class="code-block" data-v-d9be4153><code data-v-d9be4153>// ❌ 参数传递过于长，不便于阅读，易导致错误传递
luckysheetDrawMain(scrollWidth, scrollHeight, ..., border05);

// ✅ 合并对象传递
luckysheetDrawMain(options){
  const { scrollWidth, scrollHeight, ... }=options
}</code></pre><h3 data-v-d9be4153>2. 优化函数参数传递</h3><pre class="code-block" data-v-d9be4153><code data-v-d9be4153>// ❌ 参数传递过于长，不便于阅读，易导致错误传递
luckysheetDrawMain(scrollWidth, scrollHeight, ..., border05){
  // ...
  // 绘制单元格
  nullCell(scrollWidth, scrollHeight, ..., border05)
}

// ✅ 优化为对象传递
luckysheetDrawMain(options){
  // ...
  // 绘制单元格
  nullCell(options)
}</code></pre><h3 data-v-d9be4153>3. 优化绘制逻辑</h3><pre class="code-block" data-v-d9be4153><code data-v-d9be4153>// ❌ 源码中有很多地方的位置计算 通过 +1 -1 来弥补偏移量，导致绘制逻辑混乱，不明所以的多退少补
// 这里计算canvas需要绘制的矩形范围时,需要留下原本单元格边框的位置
// 让 fillRect 绘制矩形的起始xy坐标增加1,绘制长宽减少1

let cellsize = [
    start_c + offsetLeft + borderfix[0] + 1,
    start_r + offsetTop + borderfix[1] + 1,
    end_c - start_c + borderfix[2] - (!!isMerge ? 1 : 0) - 1,
    end_r - start_r + borderfix[3] - 1,
];

// ✅ 优化为统一的位置计算逻辑，摒弃 border05 参数，通过绘制边框时动态计算，实现绘制位置的准确
// 优化后,计算canvas需要绘制的矩形范围时,不需要再增加1,减少1,而是统一进行位置纠正,将下一个单元格的右边框,刚好与上一个单元格的左边框对齐</code></pre><div class="tip-box" data-v-d9be4153><p data-v-d9be4153><strong data-v-d9be4153>drawMain 的优化确实很重要</strong></p><ol data-v-d9be4153><li data-v-d9be4153>优化后，绘制逻辑更加清晰，绘制位置更加准确，避免了绘制时的偏移问题</li><li data-v-d9be4153>优化后，对整体的绘制逻辑更加统一，对打印等功能的实现、问题定位更加方便</li><li data-v-d9be4153>优化后,可针对性实现一些特殊的绘制需求,拓展一些新的功能</li></ol></div>`,11)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-d9be4153`]]);export{s as default};