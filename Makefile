BUILD_API = cd ./rest-api && npm install && cd ../ && zip -rq rest-api.zip rest-api
BUILD_HELLOWORLD = cd ./hello-world && npm install && cd ../ && zip -rq hello-world.zip hello-world

build:
	@echo "Building rest-api package....."; \
	$(BUILD_API); \

	@echo "Building hello-world package....."; \
	$(BUILD_HELLOWORLD)

package:
	@echo "Packaging CloudFormation template....."; \
	aws cloudformation package \
		--template-file ./infrastructure.yml \
		--s3-bucket ${S3_BUCKET} \
		--output-template-file infrastructure-output.yml \
		--profile ${AWS_PROFILE}

deploy:
	@echo "Deploying CloudFormation package....."; \
	aws cloudformation deploy \
		--template-file ./infrastructure-output.yml \
		--stack-name ${STACK_NAME} \
		--capabilities CAPABILITY_IAM \
		--profile ${AWS_PROFILE}
