"use strict";(self["webpackChunkz_treasure"]=self["webpackChunkz_treasure"]||[]).push([[249],{8249:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"customer-center"},[e("div",{staticClass:"search-form"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[e("el-form-item",{attrs:{label:"审批人"}},[e("el-input",{attrs:{placeholder:"审批人"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),e("el-form-item",{attrs:{label:"活动区域"}},[e("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1),e("div",{staticClass:"ops-buttons"},[e("el-button",{attrs:{type:"primary"},on:{click:t.goCreate}},[t._v("新建")])],1),e("div",{staticClass:"table-list"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"date",label:"创建时间",width:"180"}}),e("el-table-column",{attrs:{prop:"name",label:"公司名称",width:"180"}}),e("el-table-column",{attrs:{prop:"address",label:"公司地址"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.goRead(a.row)}}},[t._v("查看")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.goEdit(a.row)}}},[t._v("编辑")])]}}])})],1)],1),e("div",{staticClass:"pagenation"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)])},l=[],r=(a(4114),{name:"CustomerCenter",data(){return{formInline:{user:"",region:""},tableData:[]}},created(){this.getDetailList()},methods:{getDetailList(){this.$axios({url:"https://httpbin.org/post",method:"post",data:{a:1,b:2}}).then((t=>{200===t.status&&(this.tableData=[{date:"2016-05-02",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",id:1},{date:"2016-05-04",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",id:2},{date:"2016-05-01",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",id:3},{date:"2016-05-03",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",id:4}])}))},onSubmit(){this.$message.success(JSON.stringify(this.formInline)),console.log("submit!")},goCreate(){this.$router.push("/customer-create")},goRead(t){this.$router.push({path:"/customer-detail",query:{id:t.id}})},goEdit(t){this.$router.push({path:"/customer-create",query:{id:t.id}})}}}),i=r,n=a(1656),o=(0,n.A)(i,s,l,!1,null,null,null),u=o.exports}}]);
//# sourceMappingURL=249.a9e7e133.js.map