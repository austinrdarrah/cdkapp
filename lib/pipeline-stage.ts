import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cdk from "aws-cdk-lib";



export class stacktest extends cdk.Stack  {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

  //--------------- Create new S3 Buckets

  
    new s3.Bucket(this, 'buck', {}
      
    );
  };

  //--------------- Create/Update IAM Resources
 
  }
