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
    private courseCount = 1;
    private readonly city: string = "kochi"
    constructor(public email: string, public name: string, 
        // private userId: string
        ){
    }

    get getAppleEmail(): string{
        return 'apple email';
    }

    // setter cannot have return type annotation, type is obtained
    // setter is accessing a property and setting value on that
    set coursecount(courseNum: number) {
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
abstract class TakePhoto {
    constructor(
        public cameraMode: string
    ){}

    abstract getSepia(): void
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string
    ){
        super(cameraMode);
    }

    getSepia(): void {
        console.log('sepia');
    }
}

const jc = new Instagram('burst');