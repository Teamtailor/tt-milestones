import Component from '@glimmer/component';
import {CountUp} from 'countup.js';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @service inViewport
  shouldCount = true

  didInsertNode(element, [instance]) {
    const viewportTolerance = { bottom: 0 };
    const { onEnter } = instance.inViewport.watchElement(element, { viewportTolerance });
    onEnter(()=>{
      instance.countUp.bind(instance)(element)
    });
  }

  countUp(element) {
    if (this.shouldCount) {
      new CountUp(element, this.args.value).start();
    }
    this.shouldCount = false
  }
}
