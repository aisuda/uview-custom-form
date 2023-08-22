<template>
  <view class="wrap">
    <uv-pick-color ref="pickerColor" @confirm="confirm"></uv-pick-color>
    <button @click="openColor">打开颜色选择器</button>
  </view>
</template>
<script>
import uvPickColor from './uv-pick-color/components/uv-pick-color/uv-pick-color.vue';
export default {
  data() {
    let that = this;
    return {
      model: {
        name: '',
        sex: '',
        likeFruit: '',
        intro: '',
        payType: '支付宝',
        agreement: false,
        region: '',
        goodsType: '',
        phone: '',
        code: '',
        password: '',
        rePassword: '',
        remember: false,
        photo: '',
      },
    };
  },
  onLoad() {},
  computed: {
    borderCurrent() {
      return this.border ? 0 : 1;
    },
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  components: {
    uvPickColor,
  },
  methods: {
    openColor() {
      this.$refs.pickerColor.open();
    },
    confirm(e) {
      console.log('confirm', e);
    },
  },
};
</script>
<style scoped lang="scss"></style>
