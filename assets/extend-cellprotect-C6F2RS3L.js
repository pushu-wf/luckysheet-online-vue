import{i as e,o as t,r as n,t as r}from"./index-23a_piEy.js";var i={name:`extend-cellprotect`},a={class:`doc-content`};function o(r,i,o,s,c,l){return t(),n(`div`,a,[...i[0]||=[e(`<h1 data-v-7aa02977>cellprotect 单元格保护</h1><p data-v-7aa02977> 单元格保护功能是协同场景中的一种保护机制，用于防止其他用户对单元格进行修改，因其是在协同场景下使用，因而，需要强关联用户信息，以确保保护机制的有效性。 </p><h2 data-v-7aa02977>配置效果</h2><div class="image-container" data-v-7aa02977><img src="/assets/cell-protect-yAbl3AY9.png" alt="单元格保护配置效果" data-v-7aa02977></div><div class="image-container" data-v-7aa02977><img src="/assets/cell-protect-preview-BZTBUjJG.png" alt="单元格保护配置效果" data-v-7aa02977></div><h2 data-v-7aa02977>cellProtectOptions 配置项</h2><p data-v-7aa02977> 因为目前单元格保护功能是关联了用户系统，但是作为源码底层应用，是不知道用户体系的，因此，需要在外层初始化时，传递相关用户信息。 </p><pre class="code-block" data-v-7aa02977><code data-v-7aa02977>const options = {
    container: &quot;luckysheet&quot;,
    lang: &quot;zh&quot;,
    cellProtectOptions: {
        // 这个是配置谁可以进行单元格保护的配置（也会认定为文档所有者）
        // ⚠️ 请注意：
        // 1. depIds 部门ID列表，用户必须属于这些部门，才能进行单元格保护的配置
        // 2. roleIds 角色ID列表，用户必须属于这些角色，才能进行单元格保护的配置
        // 3. userIds 用户 ID 列表，用户必须属于这些用户 ID，才能进行单元格保护的配置
        // ⛔️ 如果该字段没有配置，那么默认是所有用户都可以进行单元格保护的配置，也就是说，所有人都是文档创建者，将失去单元格保护的意义！
        // ✅ 故而，该字段请根据实际情况，配置正确的权限，避免异常！
        permissions: { depIds: [&quot;Dep_SC_0001&quot;, &quot;Dep_KF_0001&quot;], roleIds: [&quot;Role_BMJL_0001&quot;], userIds: [&quot;MVP.SC-2001-0001&quot;] },

        // 配置当前用户信息(请注意：这个是当前初始化文档的用户信息)
        userInfo: {
            depId: &quot;Dep_SC_0001&quot;, // 部门 ID
            depName: &quot;市场部&quot;, // 部门名称
            roleId: &quot;Role_SC_0001&quot;, // 角色 ID
            roleName: &quot;经理&quot;, // 角色名称 市场部经理 市场部员工
            userId: &quot;MVP.SC-2001-0001&quot;, // 用户 ID
        },

        // 下列两个接口均为异步函数，用于获取部门与用户ID的选项列表
        

        // 初始化部门下拉选项时，回调的接口
        getDepartmentOptions: async () =&gt; Promise(Array&lt; {label:string, value:string } &gt;),
        // 初始化用户ID下拉选项时，回调的接口
        getUserOptions: async (departmentID) =&gt; Promise(Array&lt; {label:string, value:string } &gt;),
    },
    // other options
};

luckysheet.create(options);</code></pre><h2 data-v-7aa02977>温馨提示</h2><p data-v-7aa02977>这部分有些复杂，需要根据实际情况，配置正确的权限，避免异常。</p><div class="tip-box" data-v-7aa02977> 在使用过程中，如遇任何问题，欢迎咨询作者。 </div>`,11)]])}var s=r(i,[[`render`,o],[`__scopeId`,`data-v-7aa02977`]]);export{s as default};