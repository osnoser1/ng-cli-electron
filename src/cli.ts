#! /usr/bin/env node
import * as shell from "shelljs";

import { BuildTask } from "./tasks/build";
import { ServeTask } from "./tasks/serve";

const command = process.argv[2];

if (command === undefined) {
    console.log("nge build - Builds your app and places it into the output path (dist/ by default).");
    process.exit();
}

switch (command) {
    case "build":
        BuildTask.build();
        break;
    case "serve":
        ServeTask.serve();
        break;
    default:
        console.log(`Command: ${command} is not valid`);
}
