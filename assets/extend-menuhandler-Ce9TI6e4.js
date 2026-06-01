import{i as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`extend-menuhandler`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`<h1 data-v-e00f7069>menuhandler 菜单处理</h1><p data-v-e00f7069>拓展菜单在实际的业务中非常重要，为避免源码的过多修改，将菜单处理器单独提取出来，作为配置项，使得用户自由度更高。</p><div class="image-container" data-v-e00f7069><img src="/assets/menu-Ccj0pSuT.png" alt="菜单处理器配置效果" data-v-e00f7069></div><h2 data-v-e00f7069>配置方法</h2><p data-v-e00f7069><strong data-v-e00f7069>配置方法：</strong></p><pre class="code-block" data-v-e00f7069><code data-v-e00f7069>const options = {
   lang: &quot;zh&quot;,
   title: &quot;Luckysheet&quot;,
   // ...other config

   // 传入 menuHandler 配置项
   menuHandler:{
       hideDefaultMenu: string[], // 目前默认菜单为 导入导出 importFile | exportFile
       customs: MenuHandlerCustomsItem[]
   }
}

type MenuHandlerCustomsItem = {
  label: string
  value: string
  callback: () =&gt; void
  order?: string // 菜单排序，小的在上面，默认的菜单 order = 10 在默认菜单上面，需要比10小，不传默认放置在下面
  icon?: string
} |
// 分割线配置对象
{
  value: &#39;divider&#39;
}</code></pre><h3 data-v-e00f7069>示例</h3><pre class="code-block" data-v-e00f7069><code data-v-e00f7069>menuHandler: {
    customs: [
        {
            label: &quot;保存&quot;,
            value: &quot;saveFile&quot;,
            order: 1,
        },
        { value: &quot;divider&quot;, order: 2 },
    ];
}</code></pre><h3 data-v-e00f7069>自定义菜单的 icon 图标处理方法</h3><ol data-v-e00f7069><li data-v-e00f7069>下载 iconfont 资源，放置到 <code data-v-e00f7069>source/src/assets</code> 目录下（下载到本地并解压）</li><li data-v-e00f7069>在同级目录 <code data-v-e00f7069>iconfont/iconfont.css</code> 引入当前下载的资源包</li></ol><pre class="code-block" data-v-e00f7069><code data-v-e00f7069>@import url(&quot;../font_3944349_xxxxx/iconfont.css&quot;);</code></pre><p data-v-e00f7069>3. 打包输出即可正常使用 iconfont 图标</p>`,12)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-e00f7069`]]);export{s as default};