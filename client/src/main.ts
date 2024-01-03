import { bootstrapApplication } from "@angular/platform-browser";

import { appConfig } from "./app/root/app.config";
import { RootDefaultComponent } from "./app/root/root-components/root-default/root-default.component";

bootstrapApplication(RootDefaultComponent, appConfig).catch((err) => console.error(err));
