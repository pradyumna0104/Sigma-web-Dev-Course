use ("CrudDb")

// db.createCollection("courses")

// db.courses.insertOne({
//     name:"Web dev Free Course",
//     price:0,
//     assignments:12,
//     projects:45
// })

// db.courses.insertMany([
//     {
//         name: "JavaScript Mastery",
//         price: 199,
//         assignments: 20,
//         projects: 10
//     },
//     {
//         name: "Python for Beginners",
//         price: 149,
//         assignments: 15,
//         projects: 8
//     },
//     {
//         name: "Data Structures in C++",
//         price: 249,
//         assignments: 18,
//         projects: 12
//     },
//     {
//         name: "UI/UX Design Bootcamp",
//         price: 299,
//         assignments: 10,
//         projects: 6
//     },
//     {
//         name: "Full Stack Development",
//         price: 399,
//         assignments: 25,
//         projects: 20
//     },
//     {
//         name: "Machine Learning with Python",
//         price: 349,
//         assignments: 22,
//         projects: 14
//     },
//     {
//         name: "Android App Development",
//         price: 279,
//         assignments: 17,
//         projects: 9
//     },
//     {
//         name: "React Native Crash Course",
//         price: 0,
//         assignments: 8,
//         projects: 5
//     },
//     {
//         name: "DevOps Essentials",
//         price: 199,
//         assignments: 14,
//         projects: 7
//     }
// ])

// Read operation
// let a = db.courses.find({price:0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())


//it gives first matching element
// let b = db.courses.findOne({price:0})
// console.log(b)



//Update operation

//it update first matching ele
// db.courses.updateOne({price:0},{$set:{price:100}})
//for all update
// db.courses.updateMany({price:0},{$set:{price:400}})


//Delete Opeartion

//for first matching ele delete
// db.courses.deleteOne({price:1000})
//for first matching ele delete
// db.courses.deleteMany({price:1000})