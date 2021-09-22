# DevOps assignment

Thank you for showing interest in becoming part of the Starmind DevOps Team.

The intention of this assignment is to showcase your skills and also to form a good base discussion after the deliverables are submitted.

As an Engineering team we believe that it's for the mutual benefit of both the team and the candidate to get a good taste of one another's way of work and thinking. This assignment is designed to serve this purpose as best as possible.


## Description

This project is called **Egertes** - the name is inspired from the ancient Greek dog Egertes best known for his **alertness**. It is a tiny web server implementing a simple User API and health check.

**Your Goal**

Your goal is to package this application in such a way so that it can be easily deployed in the latest supported version of a Kubernetes cluster.

### Prerequisites

* You can assume we already have a modern Kubernetes Cluster. However, if you are comfortable creating your own Kubernetes Cluster, feel free, it will be considered a plus

* We run the Starmind SaaS platform in different cloud providers such as AWS and Azure

### Requirements

* We can deploy this service in different data centers and regions

* The service can be exposed with different URLs depending on the data center and region

* Deployment should be packaged in such a way so that is fully compatible with a modern CI/CD tool e.g. ArgoCD, Flux, GitLab, Jenkins, Harness, Spinnaker

* Zero downtime during deployment

* Ability to rollback if needed

* Automated recovery in case of failure


### Environment

* Node 12+

## Deliverable

Add a **"How-to-Deploy"** section to the README describing your solution. You don't need to write a whole book about your solution, keep it simple and highlight the most important party. The goal is to understand the most critical parts of it.

To make things easier while reviewing the solution we believe that the deployment should be co-located with the rest of the app code. You can return us your solution with the complete project via email or upload it to Github and share the repository. What ever is more convenient for you.

## Tips

**Start small,Think Big**

There will always be a number of things to polish. However, we suggest you start with the basics and then see what can be improved.


## FAQ

**How much time do I have ?**

You have **24 hours** from the time you receive this assignment

**How much time should I spend on this ?**

There is no actual limit as to the amount of time someone can spend on such a task. Time is 4th dimensional anyway and we are living one dimension below. However, we strongly recommend not to spend more than 8 hours on your solution.


**What tools should I use ?**

kubectl,kustomize,helm or even plain-yaml. You can generally use whatever fits best to your solution just don't overdo it.

**Any other clarification ?**

Just hit reply to the email this assignment was attached or developer@starmind.com

# Setup

```bash
npm install
```

### Run

```bash
# Server
npm run server

# Server on custom PORT (defaults to 3000)
PORT=8080 npm run server
```

### Healthcheck

```bash
curl -f http://localhost:3000/health #responds 200 - OK
```

##How-to Deploy

###Prerequisites

* A working kubernetes cluster
* An available and authenticated docker repository
* A runner/local machine to build from

###Docker
The app has been dockerized and is ready to be deployed anywhere.
To build the app either use the provided script or perform the steps yourself.

Warning: BEFORE you do this, remember to change the repository!

```bash
./build.sh
```

The running port can be configured using the PORT variable.

###K8s
For the purpose of this assignment I have used a local minikube environment.
Due to time constraints I am unable to provide the minikube instructions but will happily make a demo.

For further information see here: https://kubernetes.io/de/docs/tasks/tools/install-minikube/

You can either use a CI/CD runner to deploy the provided k8s manifests or do it from your local machine.
Either way I have provided a script that can be used instead of the direct command.

Note: BEFORE you do this, remember connect to your cluster!

```bash
./deploy.sh
```

I will gladly answer any further questions during our call.

Time spent: 2h