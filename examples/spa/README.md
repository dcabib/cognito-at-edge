## SPA template
This template create a private CloudFront distribution to host SPA applications (such as React). `403` and `404` errors are redirected to the `/index.html` file. This behavior makes possible to use library such as `react-router`.

### Instructions
Install the dependencies:
```
npm install
```

Update the `index.js` file with your UserPool parameters.

Set your region to `us-east-1` to deploy the Lambda function: `EXPORT AWS_DEFAULT_REGION=us-east-1`. Lambda@Edge only support function in this region.

Package and deploy the template. `<s3-artifact-bucket>` is the S3 bucket of your choice. It has to be in `us-east-1` too.
```
aws cloudformation package --template-file template.yml --s3-bucket <s3-artifact-bucket> --output-template-file output-template.yml
aws cloudformation deploy --template-file output-template.yml --stack-name private-frontend --capabilities CAPABILITY_IAM
```
Deployment can take a long time because of the CloudFront distribution set-up.

Upload your web application to the `FrontendS3Bucket` output of the stack. Then go to the CloudFront URL to access privately your website.
