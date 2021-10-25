<template>
  <li
    tabindex="0"
    class="file"
    :class="itemClasses"
    @keypress.enter="selectItem(item)"
    @click="selectItem(item)"
  >
    <span>{{ item.name }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
      />
    </svg>
  </li>
</template>

<script>
import { baseTreeLeaf } from '../mixins/baseTreeLeaf'

export default {
  name: 'file-item',
  mixins: [baseTreeLeaf]
}
</script>

<style lang="css" scoped>
.file {
  color: rgb(25, 61, 179);
}

.file > svg {
  fill: rgb(25, 61, 179);
}

.active {
  background: rgb(25, 61, 179);
  color: #fff;
}

.active > svg {
  fill: #fff;
}
</style>
