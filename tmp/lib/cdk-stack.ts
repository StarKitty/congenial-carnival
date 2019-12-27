import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import {CfnOutput} from '@aws-cdk/core';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "bucket cdk");
   
    new CfnOutput(this, "cdk-bucket",{value: bucket.bucketName});
  }
}
