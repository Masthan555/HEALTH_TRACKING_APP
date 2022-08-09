Node JS API's for Health Tracking application

# HEALTH_TRACKING_APP - Health tracking application backend API's
## _Learning the development of RESTful APIs for backend development_ 

This code base contains logic/structure for creating the Restful APIs for the MBA_APP app, Using which user can track his/her health condition/symptoms/any uneasy things on daily basis, And if required he/she can take appointment from the doctors available in the app.
Authorized doctors can see the patient's health record and can provide prescription which is stored accordingly respective to patient.
## Features
* Setting up project structure and database
* Setting up data models for resources such as for daily track record, appointment, hospital, user/doctor and prescription
* API for CRUD operation on above resources
* Ability to create, read, update based on authorization provided.

* Setting up data models for User item
* API for CRUD operation on User resource-
* Ability to create, read, update and User based on authorization provided.


## How is the code organized in this repo ?
Every code base is tested, So created new repo and merged everything to master branch for.

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running

## Tech
- Node.js
- Mongodb


## Installation

this app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install
npm run devStart
```


## Rest endpoints
#### 1. Patient/Doctor signup

```sh
POST /getfit/api/v1/auth/signup
Sample request body :
{
	"name": "Masthan1",
	"userId": "masthan1",
	"password": "hello",
	"email": "abc@one.com",
	"address": "evfuyge",
    "hospitalId": "6283b85e3c5ee13fc027436e", // required incase of doctor
	"userType": "PATIENT"	
}

Sample response body :
[
	{
		"_id": "62873ccfe766bce0c8c3c768",
		"name": "Masthan1",
		"userId": "masthan1",
		"address": "evfuyge",
		"userType": "PATIENT"
	}
]
```


---
#### 2. Patient/Doctor owner signin

```sh
POST /getfit/api/v1/auth/signin
Sample request body :
{
	"userId": "Masthan555",
	"password": "hello"
}

Sample response body :
{
	"name": "Masthan1",
	"userId": "masthan2",
	"address": "evfuyge",
	"userType": "PATIENT",
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hc3RoYW4yIiwiaWF0IjoxNjUzMDU2NDk5LCJleHAiOjE2NTMwNTcwOTl9.2lHb7-p119cY0R0ikDb2_l0zVeJlL8qygeVD-K6F3As"
}

```
---
#### 3. Add patient health track record
```sh
POST /getfit/api/v1/healthTrackRecords
Sample request body :
{
	"height": "5'12",
	"weight": "50",
	"bloodPressure": "120/80",
	"sugerLevel": "140",
	"bodyTemparature":"98.6°F"
}

Sample response body :
{
	"_id": "6283eb809da9c709fa1bd505",
	"name": "Masthan1",
	"userId": "masthan2",
	"address": "evfuyge",
	"userType": "PATIENT",
	"hospitalId": [],
	"healthTrackRecords": [
		"6283ebb99da9c709fa1bd510"
	],
	"createdAt": "2022-05-17T18:37:52.481Z",
	"updatedAt": "2022-05-17T18:37:52.481Z",
	"__v": 1
}
```
---
#### 4. Update track record
```sh
PUT /getfit/api/v1/healthTrackRecords/6283dd54c8840d69f92d3463
Sample request body :
{
	"height": "5'13",
	"weight": "50",
	"bloodPressure": "120/80",
	"sugerLevel": "140",
	"bodyTemparature":"98.6°F"
}

Sample response body :
{
	"_id": "6283dd54c8840d69f92d3463",
	"height": "5'13",
	"weight": "50",
	"bloodPressure": "120/80",
	"sugerLevel": "140",
	"bodyTemparature": "98.6°F",
	"userId": "masthan1",
	"createdAt": "2022-05-17T17:37:24.260Z",
	"updatedAt": "2022-05-17T17:37:24.260Z",
	"__v": 0
}
```

---
#### 5. Get track records
```sh
GET /getfit/api/v1/healthTrackRecords?patientId=masthan2

Sample response body :
[
	{
		"_id": "6283ebb99da9c709fa1bd510",
		"height": "5'12",
		"weight": "50",
		"bloodPressure": "120/80",
		"sugerLevel": "140",
		"bodyTemparature": "98.6°F",
		"userId": "masthan2",
		"createdAt": "2022-05-17T18:38:49.603Z",
		"updatedAt": "2022-05-17T18:38:49.603Z",
		"__v": 0
	}
]
```

---
#### 6. Create hospital

```sh
POST /getfit/api/v1/hospitals
Sample request body :
{
	"name": "Apollo",
	"address": "cjhjrb"
}

Sample response body :
{
	"name": "Apollo",
	"address": "cjhjrb",
	"doctor_ids": ["6287434bbcc9ab902c4cca2c"],
	"_id": "62873befe766bce0c8c3c75e",
	"createdAt": "2022-05-20T06:57:51.104Z",
	"updatedAt": "2022-05-20T06:57:51.104Z",
	"__v": 0
}
```

---
#### 7. Take appointment

```sh
POST /getfit/api/v1/appointments
Sample request body :
{
	"hospitalId": "62873befe766bce0c8c3c75e",
	"doctorId": "6287434bbcc9ab902c4cca2c",
	"date": "1652891320078",
	"cost": "700",
	"identifiedSymptoms": ["Mild Headache", "Something"]
}

Sample response body :
{
	"patientId": "62873bd8e766bce0c8c3c758",
	"hospitalId": "62873befe766bce0c8c3c75e",
	"doctorId": "6287434bbcc9ab902c4cca2c",
	"date": "2022-05-18T16:28:40.078Z",
	"cost": 700,
	"status": "OPEN",
	"identifiedSymptoms": [
		"Mild Headache",
		"Something"
	],
	"prescription": null,
	"_id": "6287a3fbc0b970a08dda0ce8",
	"createdAt": "2022-05-20T14:21:47.957Z",
	"updatedAt": "2022-05-20T14:21:47.957Z",
	"__v": 0
}
```


---
#### 8. Doctor providing prescription

```sh
POST /getfit/api/v1/prescriptions
Sample request body :
{
	medicines: req.body.medicines,
	tests: req.body.tests,
	comments: req.body.comments
}

Sample response body :
{
	"patientId": "62a0d6d88bf107ac2f3ba944",
	"hospitalId": "62a0d48b885d401e2190797c",
	"doctorId": "6298e4b1334f00c926a8d935",
	"medicines": [
        {
            "name": "Dolo 650",
            "quantity": "1 Sheet",
            "comments": "Morning 1 tablet and evening 1 table continuously for 1 week"
        }
    ],
	"tests": [],
	"comments": "",
	"createdAt": "2022-06-08T18:27:50.083Z",
	"updatedAt": "2022-06-08T18:27:50.084Z",
	"__v": 0
}
```

##### Incase of having any issues/doubts in running the API's or understanding the code.
##### Please feel free to contact me : masthan55591@gmail.com