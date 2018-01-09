build:
	@echo "Building rest-api package....."; \
	cd ./rest-api && npm install && cd ../ && zip -rq rest-api.zip rest-api

package: build
	@echo "Packaging CloudFormation template....."; \
	aws cloudformation package \
		--template-file ./infrastructure.yml \
		--s3-bucket ${S3_BUCKET} \
		--output-template-file infrastructure-output.yml \
		--profile ${AWS_PROFILE}

deploy: package
	@echo "Deploying CloudFormation package....."; \
	aws cloudformation deploy \
		--template-file ./infrastructure-output.yml \
		--stack-name ${STACK_NAME} \
		--capabilities CAPABILITY_IAM \
		--profile ${AWS_PROFILE}
