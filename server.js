const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('555-###-####'),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.database.mongodbObjectId(),
    }
    return user
}

const createCompany = () => {
    const company = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return company
}

app.get("/api/users/new",(req, res) =>{
    res.json({user:createUser()});
});

app.get("/api/companies/new",(req,res) =>{
    res.json({company:createCompany()});
});

app.get("/api/user/company", (req,res) => {
    const aUser = createUser()
    const aCompany = createCompany()
    res.json({user:createUser(), company:createCompany()});
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );