import { Express } from "express";
import { default as Route } from "../route/route";
import path from "path";

class RouteService {
  boot(app?: Express) {
    this.register(app);
  }

  register(app?: Express) {
    Route.controllerNameSpace("/app/controllers/", () =>
      require(`${path.dirname(require.main?.filename)}/routes/web`)
    );
  }
}

export default RouteService;
