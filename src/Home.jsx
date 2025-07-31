import './Hello.css';
import wp from './WhatsApp_icon.png';
function Home() {
    var a=10
    var b=20
    var mycolor = {color: 'pink', backgroundColor:'green'}
    return (
        <>
            <h1>Home Page</h1>
            A value is {a}  <br />
            B value is {b}
            <p style={{color: 'red', backgroundColor: 'blueviolet'}}>I am P tag</p>
            <p style = {mycolor}>I am P tag</p>
            <img src={wp} width={250} />
        </>
    );
}
export default Home;
