import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class ReinhardStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // todo: remove
        // Hello CDK Lambda resource
        const hello = new lambda.Function(this, "HelloHandler", {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset("lambda"),
            handler: "hello.handler"
        });

        // API Gateway REST API resource
        new apigw.LambdaRestApi(this, "Endpoint", {
            handler: hello
        })
    }
}
