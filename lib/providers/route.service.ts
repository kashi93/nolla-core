import { Express } from "express";
import { default as Route } from "../route/route";

class RouteService {
  boot(app?: Express) {
    this.register(app);
  }

  register(app?: Express) {
    Route.controllerNameSpace("/app/controllers/", () =>
      require(`${process.cwd()}/routes/web`)
    );
  }
}

export = RouteService;
