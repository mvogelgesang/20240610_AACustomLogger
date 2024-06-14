import CustomInteractionLogger from 'c/customInteractionLogger';

export default class ExampleLwc extends CustomInteractionLogger {
  hasRendered = false;
  constructor() {
    super('ExampleLwc');
    this.logInteraction('start');
    this.logInteraction('foo');
  }

  async connectedCallback() {
    // wait 5 seconds before moving ot next thing
    await this.waitFiveSeconds();

  }
  handleClick() {
    this.logInteraction('click')
  }
  renderedCallback() {
    if (!this.hasRendered) {
      this.logInteraction('end');
      this.hasRendered = true;
    }

  }

}