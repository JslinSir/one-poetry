## navBar

### 属性说明
| 参数名         | 说明                   | 类型                    | 默认值 |可选  
| ------------- | --------------------- | ------------------------ | --------------- | -----|
| title | 标题 | string | | 可选
| type | 导航栏类型: `customer: 顾客端白底黑字`; `employee: 导购端蓝底白字` | string | `customer` | 可选
| isCustomLeft | 自定义左视图: `slot: leftView` | boolean | `false ` | 可选
| slotHeight | 吸顶高度: `slot: topView` | string | `0` | 可选

## events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| navBack | 自定义左视图点击事件 | - |
| height | 导航栏整体高（包括slot） | height |

### 样例展示
``` html
<navBar title="顾客" slotHeight="30">
  <view slot="topView" style="background:orange">
    自定slot传slotHeight
  </view>
</navBar>

<navBar type="employee" title="导购" isCustomLeft="{{true}}">
  <view slot="leftView">关闭</view>
</navBar>
```