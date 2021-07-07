# PrimeHealth
Book your doctor appointment now!

```
API endpoints

modify
PUT: /{id}


delete
DELETE: /{id}


get all
GET: /appointments


get one specific
GET: /appointments/{id}


get appointment by availability and/or doctor
GET: /appointments/?date={date}&doctor={doctor}


create
POST: /appointments/
  {
    "starttime": "2021-07-06T04:00:00.000+00:00",
    "endtime": "2021-07-06T05:00:00.000+00:00",
    "doctor": {
      "id": 2
    },
    "patient": {
      "id": 1
    }
  }

Response Fields 
Name		Type		Description
starttime	datetime	Indicates start of appointment date and time.
endtime		datetime	Indicates end of appointment date and time.
doctor		integer		Indicates doctor associated id.
patient		integer		Indicates patient associated id.
```
