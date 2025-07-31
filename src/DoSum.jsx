import React from 'react';
class DoSum extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errmsg: {} };
    }
    doValidation() {
        var temperr = {}; //Blank object
        var isvalid = true; //Flag variable
        if(!a){
            temperr.txt1 = "Please enter a value";
            isvalid = false;
        }
        if(isNaN(a)){
            temperr.txt1 = "Enter only numbers";
        }
        if(!b){
            temperr.txt2 = "Please enter b value";
            isvalid = false;
        }
        //All error messages are stored in temperr object
        this.setState({ errmsg: temperr });
        //Return data is valid or not
        return isvalid;
    }
    doSum() {
        var ans = this.doValidation();
        if(ans == true){
            var c = parseInt(this.state.a) + parseInt(this.state.b);
            this.setState({ msg: c });
        }
        // if(this,this.state.a=="" || this.state.a==null) {
        //     alert("Please enter a value");
        // }
        // if(this,this.state.b=="" || this.state.b==null) {
        //     alert("Please enter b value");
        
        // }
    }
    render() { 
        return (  
            <>
            <h1>DoSum</h1>
            a: <input type="text" onChange={(e) => this.setState({ a: e.target.value })} /> <br />
            b: <input type="text" onChange={(e) => this.setState({ b: e.target.value })} /> <br />
            <input type="button" value="Do Sum" onClick={this.doSum.bind(this)} />
            {this.state.msg}
            {this.state.errmsg.txt1 && <p style={{color: "red"}}>{this.state.errmsg.txt1}</p>} 
            </>
        );
    }
}
export default DoSum;