function EventDemo() {
    const demo = () => {
            alert("Hello, this is an event demo!");
        }
        const printdata = (event) => {
            console.log("Type is: "+event.type);
            console.warn("Name is: "+event.target.name);
            console.error("Value is:" +event.target.value);
            console.log(event.target.value);
        }
    return (<>
        <input type="button" value="Click Me" onClick={demo} />
        <input type="button" value="Inline" onClick={() => alert("Inline event handler!")} />
        <input type="button" name="btn1" value="Btn1" onClick={printdata} />
        Text1<input type="text" name="txt1" onChange={printdata} />
        Text2<input type="text" name="txt2" onChange={printdata} />
    </>);
}

export default EventDemo;