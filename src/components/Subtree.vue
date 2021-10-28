<template>
  <li class="folder-wrapper">
    <SubTreeFolder
      :item="item"
      :isOpened="isSubtreeShown"
      @changedFolderState="openCloseFolder"
    />
    <template v-if="item.contents.length">
      <ul v-for="(item, idx) in item.contents" :key="`${idx}-${item.name}`">
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
import SubTreeFile from './SubTreeFile.vue'
import SubTreeLink from './SubTreeLink.vue'
import SubTreeFolder from './SubTreeFolder.vue'

export default {
  name: 'SubTree',
  components: {
    SubTreeFile,
    SubTreeLink,
    SubTreeFolder
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
        directory: 'SubTree',
        file: 'SubTreeFile',
        link: 'SubTreeLink'
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
