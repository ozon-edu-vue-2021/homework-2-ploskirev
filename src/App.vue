<template>
  <div id="app">
    <div class="path-wrapper">PATH: {{ activeItemPathDisplay }}</div>
    <ul class="root-list">
      <SubTree :path="tree.name" :activeItem="activeItem" :item="tree" />
    </ul>
  </div>
</template>

<script>
import tree from '../public/static/node_modules'
import SubTree from './components/SubTree.vue'

export default {
  name: 'App',
  components: {
    SubTree
  },
  data() {
    return {
      tree,
      activeItem: null,
      activeItemPath: ''
    }
  },
  computed: {
    activeItemPathDisplay() {
      return this.activeItemPath || 'choose item, please'
    }
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item
    },
    setActiveItemPath(path) {
      this.activeItemPath = path
    }
  },
  mounted() {
    this.$root.$on('activeItemSet', this.setActiveItem)
    this.$root.$on('activeItemPathSet', this.setActiveItemPath)
  },
  beforeDestroy() {
    this.$root.$off('activeItemSet', this.setActiveItem)
    this.$root.$off('activeItemPathSet', this.setActiveItemPath)
  }
}
</script>

<style>
html,
body {
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

.path-wrapper {
  box-sizing: border-box;
  width: 100%;
  min-width: 50px;
  background-color: rgb(62, 103, 216);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 100;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

.root-list {
  padding: 0;
  margin: 0;
  overflow-y: auto;
}

.tree-item {
  cursor: pointer;
  box-sizing: border-box;
  height: 40px;
  border-radius: 5px;
  border: 1px solid currentColor;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
  transition: background 0.3s, color 0.3s;
}

.item-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
