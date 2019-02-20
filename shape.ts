/**
 * Created by hl on 2018/10/25.
 */
class Shape {

    area: number;
    private color: string;

    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}

var square = new Shape("square", 30, 30);
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );


class Shape3D extends Shape {

    volume: number;

    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };

    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }

    superShout() {
        return super.shoutout();
    }
    pro(){
        return new Promise(((resolve, reject) => {
            if (this.volume>10) resolve(1111);
            reject(3333);
        }))
    }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );
cube.pro().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err)
});