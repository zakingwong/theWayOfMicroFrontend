<template>
  <div class="home-page">
    <div class="header-carousel">
      <div class="block text-center">
        <el-carousel height="200px" motion-blur>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 企业信息 -->
    <div class="company-info">
      <el-text>
        <p>
          Beijing Lemon Technology Co., Ltd. is a leading internet technology
          company based in China's capital city. Founded in 2018, the company
          has quickly established itself as an innovative player in the rapidly
          growing tech sector.<br />
        </p>

        <p>
          The company's core business revolves around the development of
          cutting-edge software and digital solutions. With a focus on
          artificial intelligence, big data, and cloud computing, Lemon
          Technology provides a range of products and services to both
          individual and enterprise clients. These include custom software
          development, AI-powered analytics tools, and cloud-based
          infrastructure solutions.<br />
        </p>

        <p>
          One of Lemon Technology's key strengths is its stellar team of
          engineers, data scientists, and industry experts. Hailing from top
          universities and tech companies, the company's employees bring a
          wealth of technical expertise and industry knowledge to the table.
          This has enabled Lemon Technology to consistently deliver innovative
          and high-quality solutions to its growing client base.<br />
        </p>

        <p>
          In terms of growth and financials, the company has seen impressive
          traction since its inception. Over the past three years, Lemon
          Technology has secured multiple rounds of funding from prominent
          venture capital firms and angel investors, raising a total of $45
          million. This capital has fueled the company's rapid expansion, with
          headcount growing by over 150% and revenues doubling
          year-over-year.<br />
        </p>

        <p>
          Looking ahead, the prospects for Lemon Technology remain bright. The
          company is well-positioned to capitalize on the surging demand for
          cutting-edge digital solutions, particularly in the areas of AI and
          cloud computing. With a strong technical foundation, a talented team,
          and ample financial resources, Lemon Technology is poised to continue
          its trajectory of rapid growth and innovation in the years to come.<br />
        </p>
      </el-text>
    </div>
    <!-- 企业新闻 -->
    <div class="company-news">
      <ul>
        <li>小芒果科技获得A轮融资,将加大在人工智能领域的投入</li>
        <li>小芒果科技新款AI助手正式上市,引领智能家居新趋势</li>
        <li>小芒果科技携手知名高校,共建产学研基地</li>
        <li>小芒果科技亮相国际科技展,展示最新AR/VR技术</li>
        <li>小芒果科技入选北京市"高新技术企业"名单</li>
        <li>小芒果科技CEO获评"2024年度科技创新人物"</li>
        <li>小芒果科技发布最新一代无人配送机器人</li>
        <li>小芒果科技携手医疗机构,共同开发智能医疗解决方案</li>
        <li>小芒果科技开放API,与更多行业伙伴展开合作</li>
        <li>小芒果科技入选"北京市技术创新示范企业"</li>
      </ul>
    </div>
    <!-- 友情链接 -->
    <div class="friendly-link">
      <ul>
        <li v-for="item in linkLists">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const imgLists = ref([]);
const linkLists = ref([
  "产品展示",
  "人文气息",
  "shibushi",
  "duibudui",
  "xiangbuxiang",
  "yaobuyao",
  "企业使命",
  "分秒必争",
  "瞬息即达",
  "xiababa",
  "huluanxie",
]);
</script>
<style scoped lang="less">
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.company-info {
  height: 400px;
  p {
    text-indent: 2ic;
  }
}
.company-news,.friendly-link {
  ul li {
    list-style-type: none;
  }
}
.friendly-link{
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ul li{
    margin-left: 30px;
    margin-top: 20px;
  }
}
</style>
