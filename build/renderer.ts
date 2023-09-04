// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import InfoCard from '../src/components/uni-form/uni-form';

registerRenderer(InfoCard, {
  type: 'uni-form',
  framework: 'vue3',
});

(window as any).__uniConfig = {
  router: {}
};
