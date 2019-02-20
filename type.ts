/**
 * Created by hl on 2018/10/25.
 */
function area(shape: string, width: number, height: number) {
    let area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}

document.body.innerHTML = area("rectangle", 30, 15);