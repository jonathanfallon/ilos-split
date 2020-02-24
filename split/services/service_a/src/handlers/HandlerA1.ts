import { handler } from "@ilos/common";
import { Action as AbstractAction } from "@ilos/core";

@handler({
  service: "serviceA",
  method: "handlerA1"
})
export class HandlerA1 extends AbstractAction {
  public async handle(params: object, context: object): Promise<void> {
    console.log("HandlerA1");
  }
}
