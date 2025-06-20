// const tinderUser = new Object()  // singleton object
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const ragularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Solanki"
        }
    }
}

// console.log(ragularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "j"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);      

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);    

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
    


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "harsh"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "harsh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]