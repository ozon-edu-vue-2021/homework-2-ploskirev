export const baseTreeLeaf = {
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
  computed: {
    isActiveItem() {
      return this.item === this.activeItem
    },
    itemClasses() {
      return ['tree-item', { active: this.isActiveItem }]
    }
  },
  methods: {
    selectItem(item) {
      this.isActiveItem
        ? this.emitPathAndItem(null, '')
        : this.emitPathAndItem(item, this.path)
    },
    emitPathAndItem(item, path) {
      this.$root.$emit('activeItemPathSet', path)
      this.$root.$emit('activeItemSet', item)
    }
  }
}
