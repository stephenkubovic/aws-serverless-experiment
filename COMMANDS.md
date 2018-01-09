Package
```
aws cloudformation package \
  --template-file ./infrastructure.yml \
  --s3-bucket <BUCKET NAME> \
  --output-template-file infrastructure-output.yml \
  --capabilities CAPABILITY_IAM
```

Deploy
```
aws cloudformation deploy \
  --template-file ./infrastructure-output.yml \
  --stack-name <STACK NAME> \
  --capabilities CAPABILITY_IAM
```
