<template>
  <div class="design-create">
    <!-- <iframe
      src="http://treasure.zaking.cn/design/#/create-page"
      frameborder="0"
    ></iframe> -->
    <div class="quick-input_columns">
      <el-button-group>
        <el-button
          type="primary"
          v-for="item in columnsList"
          :key="item.type"
          @click="submitTypeToDesignMicro(item.type)"
          >{{ item.name }}</el-button
        >
      </el-button-group>
    </div>

    <iframe
      id="desingIframeApp"
      ref="iframeRef"
      src="http://localhost:5173/design#/create-page"
      frameborder="0"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "DesignCreate",
  data() {
    return {
      submitResult: "",
      columnsList: [
        {
          type: "paragraph",
          name: "段落",
        },
        {
          type: "header",
          name: "标题",
        },
        {
          type: "small-image",
          name: "插入小图",
        },
        {
          type: "big-image",
          name: "插入大图",
        },
        {
          type: "list",
          name: "列表",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("message", this.getDataFromChild);
  },
  methods: {
    getDataFromChild(event) {
      this.submitResult = event.data;
      this.$axios({
        url: "https://httpbin.org/post",
        method: "post",
        data: {
          content: this.submitResult,
        },
      }).then((res) => {
        this.$message.success("提交成功");
        console.log(res, "res");
      });
    },
    submitTypeToDesignMicro(type) {
      const designMicroIframeRef = document.querySelector("#desingIframeApp");
      const path = "http://treasure.zaking.cn/design/"
      this.$postMessage(
        designMicroIframeRef.contentWindow,
        type,
        path,
      );
    },
  },
};
</script>
<style lang="less">
.design-create {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
  .quick-input_columns {
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
