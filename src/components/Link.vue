<template>
  <li
    tabindex="0"
    class="link"
    :class="itemClasses"
    @keypress.enter="selectItem(item)"
    @click="selectItem(item)"
  >
    <span>{{ item.name }}</span>
    <span class="details">target: {{ item.target }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      />
    </svg>
  </li>
</template>

<script>
import { baseTreeLeaf } from '../mixins/baseTreeLeaf'

export default {
  name: 'link-item',
  mixins: [baseTreeLeaf]
}
</script>

<style lang="css" scoped>
.link {
  color: rgb(18, 128, 76);
  position: relative;
}

.link > svg {
  fill: rgb(18, 128, 76);
}

.active {
  background: rgb(18, 128, 76);
  color: #fff;
}

.active > svg {
  fill: #fff;
}

.details {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 10px;
  color: #2c3e50;
  opacity: 0;
  transition: opacity 0.3s, color 0.3s;
}

.link:hover .details {
  opacity: 1;
}

.active:hover .details {
  color: #ccc;
}
</style>
