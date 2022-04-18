<template>
  <el-checkbox
    :value="value"
    :disabled="disabled"
    :border="border"
    @change="handleChange"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
import { Checkbox } from "element-ui";

export default {
  name: 'vCheckbox',
  components: {
    [Checkbox.name]: Checkbox
  },
  props: {
    // 是否禁用
    disabled: Boolean,
    // 双向绑定的值
    value: [String, Boolean, Number],
    // 是否显示边框
    border: Boolean
  },
  methods: {
    handleChange(v, e) {
      this.$emit('change', v, e);
    }
  }
}
</script>