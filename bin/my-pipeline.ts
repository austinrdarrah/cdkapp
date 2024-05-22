import { App } from "aws-cdk-lib";
import { MyPipelineStack } from "../lib/cdkpipeline-stack";

const app = new App();
new MyPipelineStack(app, "DevPipeline", { 
    env: { account: "339446593358", region: "us-west-2" }
});