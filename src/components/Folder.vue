<template>
  <div
    tabindex="0"
    class="tree-item folder"
    @keypress.enter="openCloseFolder"
    @click.stop="openCloseFolder"
  >
    <div class="folder-name-wrapper">
      <span v-show="!isOpened" class="control-icon">+</span>
      <span v-show="isOpened" class="control-icon">-</span>
      <span class="folder-name">{{ item.name }}</span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Folder',
  props: {
    item: {
      type: Object,
      required: true
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openCloseFolder() {
      this.isOpened ? this.emitFolderEvent(false) : this.emitFolderEvent(true)
    },
    emitFolderEvent(value) {
      this.$emit('changedFolderState', value)
    }
  }
}
</script>

<style>
.folder-wrapper {
  width: 100%;
}

.folder {
  border: 1px solid grey;
}

.folder-name-wrapper {
  max-width: calc(100% - 24px);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.folder-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-icon {
  font-weight: 700;
  margin-right: 20px;
}

.folder > svg {
  fill: grey;
}
</style>
