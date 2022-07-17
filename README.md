# Lambda-Webpack

App: `aws-node-rest-api-project`

1. serverless -t aws-nodejs (If the structure has not been created)
2. Iam 
  - user
  - name
  - programmatic access
  - user group
    - admin access
  - copy `access` and `secret` keys
3. Add `access` and `secret` keys in github repository secrets
4. Add secret keys to github workflow
5. Push code to main
6. In AWS, select the region specified for the lambda 