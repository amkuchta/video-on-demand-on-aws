import { Construct } from 'constructs';
import { aws_stepfunctions_tasks as tasks } from 'aws-cdk-lib';
import { LambdaFunctions } from './lambda-functions';

export interface StepFunctionsTasksProps {
  lambdaFunctions: LambdaFunctions;
  stackName: string;
}

export class StepFunctionsTasks extends Construct {
  // Ingest Workflow Tasks
  public readonly ingestWorkflowInputValidate: tasks.LambdaInvoke;
  public readonly ingestWorkflowMediaInfo: tasks.LambdaInvoke;
  public readonly ingestWorkflowDynamoDbUpdate: tasks.LambdaInvoke;
  public readonly ingestWorkflowSnsNotifications: tasks.LambdaInvoke;
  public readonly ingestWorkflowProcessExecute: tasks.LambdaInvoke;

  // Process Workflow Tasks
  public readonly processWorkflowProfiler: tasks.LambdaInvoke;
  public readonly processWorkflowEncodeJobSubmit: tasks.LambdaInvoke;
  public readonly processWorkflowDynamoDbUpdate: tasks.LambdaInvoke;

  // Publish Workflow Tasks
  public readonly publishWorkflowValidateEncodingOutput: tasks.LambdaInvoke;
  public readonly publishWorkflowArchive: tasks.LambdaInvoke;
  public readonly publishWorkflowDeepArchive: tasks.LambdaInvoke;
  public readonly publishWorkflowMediaPackageAssets: tasks.LambdaInvoke;
  public readonly publishWorkflowDynamoDbUpdate: tasks.LambdaInvoke;
  public readonly publishWorkflowSqsSendMessage: tasks.LambdaInvoke;
  public readonly publishWorkflowSnsNotification: tasks.LambdaInvoke;

  constructor(scope: Construct, id: string, props: StepFunctionsTasksProps) {
    super(scope, id);

    this.ingestWorkflowInputValidate = new tasks.LambdaInvoke(
      this,
      'IngestWorkflowInputValidateTask',
      {
        lambdaFunction: props.lambdaFunctions.inputValidate,
      }
    );

    this.ingestWorkflowMediaInfo = new tasks.LambdaInvoke(
      this,
      'IngestWorkflowMediaInfoTask',
      {
        lambdaFunction: props.lambdaFunctions.mediaInfo,
      }
    );

    this.ingestWorkflowDynamoDbUpdate = new tasks.LambdaInvoke(
      this,
      'IngestWorkflowDynamoDbUpdateTask',
      {
        lambdaFunction: props.lambdaFunctions.dynamoDbUpdate,
      }
    );

    this.ingestWorkflowSnsNotifications = new tasks.LambdaInvoke(
      this,
      'IngestWorkflowSnsNotificationsTask',
      {
        lambdaFunction: props.lambdaFunctions.snsNotification,
      }
    );

    this.ingestWorkflowProcessExecute = new tasks.LambdaInvoke(
      this,
      'IngestWorkflowProcessExecuteTask',
      {
        lambdaFunction: props.lambdaFunctions.stepFunctions,
      }
    );

    this.processWorkflowDynamoDbUpdate = new tasks.LambdaInvoke(
      this,
      'ProcessWorkflowDynamoDbUpdateTask',
      {
        lambdaFunction: props.lambdaFunctions.dynamoDbUpdate,
      }
    );

    this.processWorkflowEncodeJobSubmit = new tasks.LambdaInvoke(
      this,
      'ProcessWorkflowEncodeJobSubmitTask',
      {
        lambdaFunction: props.lambdaFunctions.encode,
      }
    );

    this.processWorkflowProfiler = new tasks.LambdaInvoke(
      this,
      'ProcessWorkflowProfilerTask',
      {
        lambdaFunction: props.lambdaFunctions.profiler,
      }
    );

    this.publishWorkflowArchive = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowArchiveTask',
      {
        lambdaFunction: props.lambdaFunctions.archiveSource,
      }
    );

    this.publishWorkflowDeepArchive = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowDeepArchiveTask',
      {
        lambdaFunction: props.lambdaFunctions.archiveSource,
      }
    );

    this.publishWorkflowDynamoDbUpdate = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowDynamoDbUpdateTask',
      {
        lambdaFunction: props.lambdaFunctions.dynamoDbUpdate,
      }
    );

    this.publishWorkflowMediaPackageAssets = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowMediaPackageAssetsTask',
      {
        lambdaFunction: props.lambdaFunctions.mediaPackageAssets,
      }
    );

    this.publishWorkflowSnsNotification = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowSnsNotificationTask',
      {
        lambdaFunction: props.lambdaFunctions.snsNotification,
      }
    );

    this.publishWorkflowSqsSendMessage = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowSqsSendMessageTask',
      {
        lambdaFunction: props.lambdaFunctions.sqsSendMessage,
      }
    );

    this.publishWorkflowValidateEncodingOutput = new tasks.LambdaInvoke(
      this,
      'PublishWorkflowValidateEncodingOutputTask',
      {
        lambdaFunction: props.lambdaFunctions.outputValidate,
      }
    );
  }
}
