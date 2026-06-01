import{n as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`extend-customShortcuts`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`h1`,null,`customShortcuts 自定义快捷键`,-1),e(`p`,null,` 快捷键在 excel 中是非常重要的，它可以帮助用户快速完成操作，提高工作效率。自定义快捷键可以在 excel 中实现，用户可以根据自己的需求，自定义快捷键，提高工作效率。 `,-1),e(`h2`,null,`配置方法`,-1),e(`pre`,{class:`code-block`},[e(`code`,null,`const options = {
    container: "luckysheet",
    customShortcuts: [
        {
            ctrl: boolean, // 是否需要按住 ctrl 键
            alt: boolean, // 是否需要按住 alt 键
            shift: boolean, // 是否需要按住 shift 键
            key: string, // 按键的名称 小写，例如 "s" 、"a"、"p"
            keyCode: number, // 按键的 keyCode 例如 83 、97 、80
            callback: function () {}, // 回调函数
        },
    ],
};`)],-1)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-fedc6f5d`]]);export{s as default};