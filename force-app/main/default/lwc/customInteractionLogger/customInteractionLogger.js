import { LightningElement } from "lwc";
import log from "@salesforce/apex/AppAnalyticsLogger.log";

export default class CustomInteractionLogger extends LightningElement {
  constructor(childClassName) {
    super();
    this.childClassName = childClassName;
  }
  logInteraction(type) {
    console.log(`%c logging new interaction of type: ${type}`, 'color:blue')
    log({ componentName: this.childClassName, type: type });
  }
  waitFiveSeconds() {
    console.log(`%c waitFiveSeconds start, ${Date()}`, 'color:green');
    // wait 5 seconds before moving to next thing
    return new Promise((resolve) => {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      setTimeout(() => {
        resolve();
        console.log(`%c waitFiveSeconds complete, ${Date()}`, 'color:green');
      }, 5000);
    });
  }
}
