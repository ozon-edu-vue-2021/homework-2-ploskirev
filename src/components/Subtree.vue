<template>
  <li class="folder-wrapper">
    <Folder
      :item="item"
      :isOpened="isSubtreeShown"
      @changedFolderState="openCloseFolder"
    />
    <template v-if="item.contents.length">
      <ul v-for="(item, idx) in item.contents" :key="idx">
        <component
          v-if="isSubtreeShown"
          :item="item"
          :is="getComponent(item.type)"
          :path="getNextItemPath(item)"
          :activeItem="activeItem"
        />
      </ul>
    </template>
    <div v-else-if="isSubtreeShown" class="empty-folder">empty folder</div>
  </li>
</template>

<script>
import File from './File.vue'
import Link from './Link.vue'
import Folder from './Folder.vue'

export default {
  name: 'Subtree',
  components: {
    File,
    Link,
    Folder
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    activeItem: {
      type: Object,
      default: () => ({})
    },
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isSubtreeShown: false
    }
  },
  methods: {
    getComponent(treeItemType) {
      const components = {
        directory: 'Subtree',
        file: 'File',
        link: 'Link'
      }
      return components[treeItemType]
    },
    getNextItemPath(item) {
      return `${this.path}/${item.name}`
    },
    openCloseFolder(needOpen) {
      this.isSubtreeShown = needOpen ? true : false
    }
  }
}
</script>

<style>
.empty-folder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: rgb(143, 143, 143);
}
</style>
