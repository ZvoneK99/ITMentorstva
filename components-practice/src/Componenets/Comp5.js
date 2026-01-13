import Result from "./Comp5.1";

function Score({ score }) {

    let text;
    let color;

    if (score >= 50) {
        text = "Položio!";
        color = "green";
    } else {
        text = "Pao!";
        color = "red";
    }

    return (
        <Result text={text} color={color} />
    );
}

export default Score;
