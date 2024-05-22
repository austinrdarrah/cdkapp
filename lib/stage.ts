import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { stacktest } from './pipeline-stage';

export class MyPipelineAppStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);

      const s3stack = new stacktest(this, 'LambdaStack', {
        stackName: "KBBR"
      });
    }
}