import { expect } from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import NewReport from '@/components/NewReport.vue';

describe('NewReport.vue', () => {
  it('tests Render a button', () => {
    const wrapper = shallowMount(NewReport);
    expect(wrapper.contains('b-button')).to.eq(true);
  });
});
