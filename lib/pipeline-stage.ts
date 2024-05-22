import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from 'aws-cdk-lib/aws-s3'
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";



export class PipelineStage extends cdk.Stage  {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

  //--------------- Create new S3 Buckets

  
    new s3.Bucket(this, 'buck', {}
      
    );
  };

  //--------------- Create/Update IAM Resources
 
  }
