import{n as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`extend-requestheaders`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`h1`,null,`requestHeaders 请求头`,-1),e(`p`,null,`在实际的业务场景中，数据的获取、表格的初始化，都需要在请求头中添加一些信息，例如：token、用户id等。`,-1),e(`h2`,null,`具体配置方法`,-1),e(`pre`,{class:`code-block`},[e(`code`,null,`const options = {
    container: "luckysheet",
    // other options
    requestHeaders: {
        token: "123456",
        "custom-user-id": "789012",
        // 其他请求头信息
    },
};`)],-1),e(`p`,null,`其内部是利用了 Ajax 请求的配置，来实现请求头的添加。`,-1),e(`pre`,{class:`code-block`},[e(`code`,null,`$.ajax({
    url: "/api/xxx",
    type: "POST",
    data: {},
    headers: requestHeaders,
});`)],-1)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-59060ee7`]]);export{s as default};