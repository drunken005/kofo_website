<template>
    <div class="row">
        <p class="model-title">{{item.title}}</p>
        <p class="model-text line-bottom">
            <strong>{{item.text}}</strong>
        </p>
        <div class="container">
            <div v-for="(child,index) in item.children" :key="index" class="col-lg-3 col-md-3 hidden-sm hidden-xs">
                <div class="th-div th-div-left">
                    <img class="img-highlights" :src="child.img">
                    <p class="th-p-title">{{child.title}}</p>
                    <p class="th-p-content" v-if="child.des && !Array.isArray(child.des)">{{child.des}}</p>
                    <p class="th-p-item" v-if="child.des && Array.isArray(child.des)" v-for="(subChild, idx) in (child.des)" :key="idx">
                        {{ subChild }}
                    </p>
                </div>
            </div>
            <div class="hidden-lg hidden-md">
                <div v-for="(child,index) in item.children" :key="index" :class="index==1?'th-div-xs':''" class="th-div th-div-center" >
                    <img class="img-highlights" :src="child.img">
                    <p class="th-p-title">{{child.title}}</p>
                    <p class="th-p-content" v-if="child.des && !Array.isArray(child.des)">{{child.des}}</p>
                    <p class="th-p-item" v-if="child.des && Array.isArray(child.des)" v-for="(subChild, idx) in (child.des)" :key="idx">
                        {{ subChild }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "item",
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped>
.model-title {
  color: #666;
  font-size: 16px;
  letter-spacing: 0.2em;
  margin-bottom: 15px;
}
.model-text {
  margin-bottom: 80px;
}
.th-div {
  width: 95%;
}
.th-div .th-p-title {
  font-weight: bolder;
  margin-top: 40px;
  font-size: 20px;
}
.th-div .th-p-content {
  margin-top: 15px;
  font-size: 14px;
  line-height: 26px;
  text-align: justify;
}
.img-highlights {
  width: 150px;
  text-align: center;
}
.th-div-center {
  margin-left: auto;
  margin-right: auto;
}
.th-div-xs {
  margin-top: 30px;
  margin-bottom: 30px;
}
.th-p-item {
  position: relative;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  margin-bottom: 5px;
}
.th-p-item:before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  left: -10px;
  top: 8px;
  font-size: 32px;
  background: #333;
}
</style>
