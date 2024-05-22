import { App } from "aws-cdk-lib";
import { MyPipelineStack } from "../lib/cdkpipeline-stack";



const app = new App();
new MyPipelineStack(app, "DevPipeline", { 

});