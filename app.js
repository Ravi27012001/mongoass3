const mongoose = require("mongoose");
const Url = "mongodb://localhost:27017/My-list";



// creating a connection with the database : connection url should contain the db name inside it like here is 

mongoose.connect(Url, async (err, suc)=>{
    if(err) console.log(err);
    console.log("Connected Successfully");
}) ;
//for adding in collection lets create a mpngoose schema;
const data = mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: Number,
    department: String,
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: Number,
    yearGrad: Number,
    gradStream: String
})


 //Now creating collections using this schema,
 const persons = mongoose.model("persons",data);
//now create a array(documents) to add in our collection.
var all = [{"firstName": "John",
"lastName": "Doe",
"salary": "25000",
"department": "HR",
"lastCompany": "X",
"lastSalary": "10000",
"overallExp": "2",
"contactInfo": "1234567890",
"yearGrad": "2016",
"gradStream": "CSE"
},{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "roh",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
}]
//adding all the data to our collections
 
 persons.insertMany(all,(err, res)=>{
        if (err) console.log(err);
         console.log("inserted successfully");
     })

//display all the documents

persons.find({}, (err, res)=>{
    if (err) console.log(err);
    console.log(res);
})
//salary less than 4000;
persons.find({salary:{$lt:4000}},(err,res)=>{
    if(err) console.log(err);
     console.log(res);
})

// Updating the document . 

// persons.updateOne({firstname: "jame"}, {$set:{firstname: "ravi"}}, (err, res)=>{
//     if (err) console.log(err);
//     console.log(res);
// })

// Deleting the document .

persons.deleteOne({firstname:"sao"},(err, res)=>{
    if (err) console.log(err);
    else console.log(res);
});
