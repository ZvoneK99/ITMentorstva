import Display from "./Comp6.1";

function Temperature({degrees}) {

    let text="";
    let color ="";

    if(degrees>=30) {
        text="Vruće!";
        color="red";
    }
    else {
        text="Hladno!";
        color="blue";
    }
    return (
        <Display text={text} color={color}/>
    );
}
export default Temperature;