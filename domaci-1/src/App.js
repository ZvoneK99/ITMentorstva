//Automatski darkmode
//ako je vrijeme od 20-07 onda darkmode a inace lightmode

const currentTime = new Date();
const now = currentTime.getHours();
console.log(currentTime);
console.log(now);
let boja = "red";




function Domaci() {
  if (now>=7 && now<=20) {
    boja="darkblue"
  }

  return (
    <div style={{background: boja}}>
<h1>Domaci zadatak</h1>
    </div>

  );
}

export default Domaci