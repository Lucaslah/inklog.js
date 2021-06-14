import {
    exec, ExecException
} from "child_process";

import EventEmitter from "events";
import { BuildError } from "./extras/BuildError";

class RunCommand extends EventEmitter {
    private command: string;
    private debug: boolean;
    constructor({ debug }: { debug: boolean }) {
        super();
        this.debug = debug;
    }

    private async handleExecException(error: ExecException): Promise<void> {
        throw new BuildError(error);
    }

    private async handleStdout(stdout: string): Promise<void> {
        return console.log(stdout);
    }
    private async handleStderr(stderr: string): Promise<void> {
        return console.log(stderr);
    }

    public async exec(command: string): Promise<void> {
        exec(command, (error: ExecException, stdout: string, stderr: string): void => {
            if (error) this.handleExecException(error);
            if (stderr) this.handleStderr(stderr);
            if (stdout) this.handleStdout(stdout);
        })
    }

}

new RunCommand({ debug: false }).exec('');