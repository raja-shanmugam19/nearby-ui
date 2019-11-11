import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import NewReport from '@/components/NewReport.vue';
import LooTypes from '@/components/LooTypes.vue';
@Component({
  components: {
    Header,
    NewReport,
    LooTypes,
  },
})
export default class Home extends Vue {}
