import RouteService from "../../providers/route.service";
import RouteRegister from "../../route/routeRegister";

export default class routeListCommand {
    async handler() {
        this.finally();
    }
    async finally() {
        new RouteService().boot();
        const routerReg = new RouteRegister();
        await routerReg.register();
        console.table(routeList);
    }
}