# CELL

## classes

| 名称 | 说明 |
| --- | --- |
| class-container | 父容器 |
| class-extra | 右侧的额外内容容器 |

## props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| border | 显示底部边框 | Boolean | false |
| title | 左侧标题 | String | - |
| label | 左侧标题下方的描述信息 | String | - |
| extra | 右侧的额外内容 | String | - |
| icon | 右侧 icon 的图片路径 | String | - |
| dis-icon | 不展示右侧 icon | Boolean | false |

## slots

| 名称 | 说明 |
| --- | --- |
| title | 左侧标题 |
| extra | 右侧的额外内容 |

## events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 父容器被点击时触发 | - |

## 示例

```html
<!-- title 为空时，默认渲染 slots.title -->
<!-- label 为空时，默认渲染 slots.label -->
<!-- extra 为空时，默认渲染 slots.extra -->
<cell>
  <view slot="title">slots.title</view>
  <view slot="label">slots.label</view>
  <view slot="extra">slots.extra</view>
</cell>

<cell dis-icon title="不显示右侧箭头 icon">

<cell 
  bind:click="handleClick" 
  title="左侧标题" 
  label="标题下的说明" 
  extra=" 右侧补充" 
/>

<cell 
  class-extra="text-gray" 
  title="退货原因" 
  extra="请选择原因" 
  border
/>

<cell title="退款方式" extra="微信支付" dis-icon/>

<cell label="最多退¥169.9">
  <view slot="title">
    <text>退款金额：</text>
    <text class="text-red">¥169.9</text>
  </view>
</cell>
```