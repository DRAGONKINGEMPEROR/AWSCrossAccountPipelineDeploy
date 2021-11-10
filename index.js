exports.handler = async (event, context) => {
    //Get the Lambda function arn from context
    const lambdaFunctionArn = context.invokedFunctionArn
    //Get the account ID from the function arn 
    const awsAccountId = lambdaFunctionArn.split(':')[4]

    // Based on the account ID whether its a pre-production or production environment it will generate respective response 
    var demo_response=''
    if(awsAccountId==='30XXXXXXXXXX'){
        demo_response='Welcome to my Pre-Production Account '+ awsAccountId + ' world of serverless computing';
    }
    else if(awsAccountId==='90XXXXXXXXXX'){
        demo_response='Welcome to my Production Account ' + awsAccountId + ' world of serverless computing';
    }
    //Response for API with status code
    const response = {
        statusCode: 200,
        body: demo_response,
    };
    return response;
};