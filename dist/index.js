"use strict";
// class User {
//     email: string
//     name: string
//     private readonly city: string = "kochi"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.courseCount = 1;
        this.city = "kochi";
    }
    get getAppleEmail() {
        return 'apple email';
    }
    // setter cannot have return type annotation, type is obtained
    // setter is accessing a property and setting value on that
    set coursecount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('err');
        }
        this.courseCount = courseNum;
    }
}
const user = new User("sanj@gmail.com", "sanjana");
console.log(user);
// user.city = "kochi";
// user.city // error as it is private, cannot be accessed outside the class
//abstract class cannot have objects
class TakePhoto {
    constructor(cameraMode) {
        this.cameraMode = cameraMode;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode) {
        super(cameraMode);
        this.cameraMode = cameraMode;
    }
    getSepia() {
        console.log('sepia');
    }
}
const jc = new Instagram('burst');
