import { Handler, APIGatewayEvent } from 'aws-lambda';

const handler: Handler<APIGatewayEvent> = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,

    }),
  };
  callback(null, response);
};

exports.handler = handler;
