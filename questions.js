//creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "A company needs to implement a secure data encryption solution to meet regulatory requirements. The solution must provide security and durability in generating, storing, and controlling cryptographic data keys. Which action should be taken to provide the MOST secure solution?",
    answer:
      "Use AWS Key Management Service (AWS KMS) to generate AWS KMS keys and data keys. Use AWS KMS key policies to control access to the KMS keys.",
    options: [
      ["Use AWS Key Management Service (AWS KMS) to generate AWS KMS keys and data keys. Use AWS KMS key policies to control access to the KMS keys."],
      "Use AWS Key Management Service (AWS KMS) to generate cryptographic keys and import the keys to AWS Certificate Manager. Use IAM policies to control access to the keys.",
      "Use a third-party solution from AWS Marketplace to generate the cryptographic keys and store them on encrypted instance store volumes. Use IAM policies to control access to the encryption key APIs.",
      "Use OpenSSL to generate the cryptographic keys and upload the keys to an Amazon S3 bucket with encryption enabled. Apply AWS Key Management Service (AWS KMS) key policies to control access to the keys."
    ]
  },
  {
    numb: 2,
    question:
      "A startup company is looking for a solution to cost-effectively run and access microservices without the operational overhead of managing infrastructure. The solution needs to be able to scale quickly to accommodate rapid changes in the volume of requests and protect against common DDoS attacks. What is the MOST cost-effective solution that meets these requirements?",
    answer: "Run the microservices in AWS Lambda behind an Amazon API Gateway.",
    options: [
      "Run the microservices in containers using AWS Elastic Beanstalk.",
      "Run the microservices in AWS Lambda behind an Amazon API Gateway.",
      "Run the microservices on Amazon EC2 instances in an Auto Scaling group.",
      "Run the microservices in containers using Amazon Elastic Container Service (Amazon ECS) backed by EC2 instances."
    ]
  },
  {
    numb: 3,
    question:
      "A solutions architect has been given a large number of video files to upload to an Amazon S3 bucket. The file sizes are 100–500 MB. The solutions architect also wants to easily resume failed upload attempts. How should the solutions architect perform the uploads in the LEAST amount of time?",
    answer:
      "Using the AWS CLI, copy individual objects into the S3 bucket with the aws s3 cp command.",
    options: [
      "Split each file into 5-MB parts. Upload the individual parts normally and use S3 multipart upload to merge the parts into a complete object.",
      "Using the AWS CLI, copy individual objects into the S3 bucket with the aws s3 cp command.",
      "From the Amazon S3 console, select the S3 bucket. Upload the S3 bucket, and drag and drop items into the bucket.",
      "Upload the files with SFTP and the AWS Transfer Family."
    ]
  },
  {
    numb: 4,
    question:
      "A company is migrating its on-premises application to Amazon Web Services and refactoring its design. The design will consist of frontend Amazon EC2 instances that receive requests, backend EC2 instances that process the requests, and a message queuing service to address decoupling the application. The Solutions Architect has been informed that a key aspect of the application is that requests are processed in the order in which they are received. Which AWS service should the Solutions Architect use to decouple the application?",
    answer: "Amazon Simple Queue Service (Amazon SQS) FIFO queue",
    options: [
      "Amazon Simple Queue Service (Amazon SQS) standard queue",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Queue Service (Amazon SQS) FIFO queue",
      "Amazon Kinesis"
    ]
  },
  {
    numb: 5,
    question:
      "A company has developed an application that processes photos and videos. When users upload photos and videos, a job processes the files. The job can take up to 1 hour to process long videos. The company is using Amazon EC2 On-Demand Instances to run web servers and processing jobs. The web layer and the processing layer have instances that run in an Auto Scaling group behind an Application Load Balancer. During peak hours, users report that the application is slow and that the application does not process some requests at all. During evening hours, the systems are idle. What should a solutions architect do so that the application will process all jobs in the MOST cost-effective manner?",
    answer: "Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web layer and the processing layer. Use a custom queue metric to scale the Auto Scaling group in the processing layer.",
    options: [
      "Split each file into 5-MB parts. Upload the individual parts normally and use S3 multipart upload to merge the parts into a complete object.",
      "Attach an internet gateway to the VPC. Create public subnets for the web tier. Create private subnets for the application and database tiers.",
      "Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web layer and the processing layer. Use a custom queue metric to scale the Auto Scaling group in the processing layer.",
      "Use AWS Lambda functions instead of EC2 instances and Auto Scaling groups. Increase the service quota so that sufficient concurrent functions can run at the same time.",
    ]
  },
  {
    numb: 7,
    question:
      "A solutions architect must create a disaster recovery (DR) solution for a company's business-critical applications. The DR site must reside in a different AWS Region than the primary site. The solution requires a recovery point objective (RPO) in seconds and a recovery time objective (RTO) in minutes. The solution also requires the deployment of a completely functional, but scaled-down version of the applications. Which DR strategy will meet these requirements?",
    answer: "Warm standby",
    options: [
      "Multi-site active-active",
      "Backup and restore",
      "Pilot light",
      "Warm standby",
    ]
  },
  {
    numb: 8,
    question:
      "A large international company has a management account in AWS Organizations, and over 50 individual accounts for each country they operate in. Each of the country accounts has at least four VPCs set up for functional divisions. There is a high amount of trust across the accounts, and communication among all of the VPCs should be allowed. Each of the individual VPCs throughout the entire global organization will need to access an account and VPC that provide shared services to all the other accounts. How can the member accounts access the shared services VPC with the LEAST operational overhead?",
    answer: "Create a Network Load Balancer across the Availability Zones in the shared services VPC. Create service consumer roles in IAM, and set endpoint connection acceptance to automatically accept. Create consumer endpoints in each division VPC and point to the Network Load Balancer.",
    options: [
      "Create an Application Load Balancer, with a target of the private IP address of the shared services VPC. Add a Certification Authority Authorization (CAA) record for the Application Load Balancer to Amazon Route 53. Point all requests for shared services in the routing tables of the VPCs to the CAA record.",
      "Create a peering connection between each of the VPCs and the shared services VPC.",
      "Create a Network Load Balancer across the Availability Zones in the shared services VPC. Create service consumer roles in IAM, and set endpoint connection acceptance to automatically accept. Create consumer endpoints in each division VPC and point to the Network Load Balancer.",
      "Create a VPN connection between each of the VPCs and the shared service VPC.",
    ]
  },
  {
    numb: 9,
    question:
      "An organization is planning to migrate from an on-premises data center to an AWS environment that spans multiple Availability Zones. A migration engineer has been tasked to plan how to transfer the home directories and other shared network attached storage from the data center to AWS. The migration design should support connections from multiple Amazon EC2 instances running the Linux operating system to this common shared storage platform. What storage option best fits their design?",
    answer: "Transfer the files to Amazon EFS and mount that file system to the EC2 instances.",
    options: [
      "Transfer the files to Amazon S3 and access that data from the EC2 instances.",
      "Create a peering connection between each of the VPCs and the shared services VPC.",
      "Transfer the files to Amazon EFS and mount that file system to the EC2 instances.",
      "Create a VPN connection between each of the VPCs and the shared service VPC.",
    ]
  },
];
