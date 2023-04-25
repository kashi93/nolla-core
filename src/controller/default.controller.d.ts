import Validator from "./validator";
import { Rule, Request } from "../nolla-core";
declare class DefaultController implements Validator {
    validate: (req: Request, rule: Rule, sentBack?: boolean) => Promise<any[] | boolean>;
}
export default DefaultController;
