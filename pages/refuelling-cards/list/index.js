import './index.scss'
import Header from '../../../components/Header'
import Aside from '../../../components/Aside'

export default {
  name: '',
  components: {
    Header,
    Aside
  },
  head() {
    return {
      title: '加油卡充值订单 - EasyAPI充值中心',
      meta: [
        { hid: 'description', name: 'description', content: '每日统计' },
        { hid: 'keyword', name: 'keyword', content: '每日统计' }
      ]
    }
  },
  data() {
    return {
      showHeader: '',
      showSidebar: '',
      tableData: []
    }
  },
  methods: {},
  mounted() {
    if (this.$store.state.settings.showHeader == 'true') {
      this.showHeader = true
    } else {
      this.showHeader = false
    }
    if (this.$store.state.settings.showSidebar == 'true') {
      this.showSidebar = true
    } else {
      this.showSidebar = false
    }
  }
}
