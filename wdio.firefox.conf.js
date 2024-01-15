import { config as mainConfig } from "./wdio.conf.js";
import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  ...mainConfig,
  capabilities: [
    {
      // capabilities for local Firefox web tests
      maxInstances: 1,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--headless", "--disable-gpu"],
      },
    },
    // You can add capabilities for other browsers here
  ],
};
