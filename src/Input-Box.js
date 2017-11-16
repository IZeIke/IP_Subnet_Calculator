import React, {Component} from "react"
import { Button } from 'reactstrap';

class InputBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            ipText : ""
        }
    }

    editTextHandler(event){
        this.setState({
            ipText: event.target.value
        })
    }

    render(){
        let {options , networkClassHandler ,resultState ,optionHandler} = this.props
        let ip = this.state.ipText
        return(
            <div className="input_box">

                <div class="NetworkClass">
                    <p>Network Class</p>

                    <input type="radio" name="class" value="any" id="any" onChange = {networkClassHandler} defaultChecked={true}/>
                    &nbsp;
                    <label htmlFor="any">Any</label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="radio" name="class" value="a" id="a" onChange = {networkClassHandler}/>
                    &nbsp;
                    <label htmlFor="a">A</label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="radio" name="class" value="b" id="b" onChange = {networkClassHandler}/>
                    &nbsp;
                    <label htmlFor="b">B</label>
                    &nbsp;&nbsp;&nbsp;
                    <input type="radio" name="class" value="c" id="c" onChange = {networkClassHandler}/>
                    &nbsp;
                    <label htmlFor="c">C</label>

                </div>

                <div class="Subnet">
                    <p>Subnet &nbsp;&nbsp;&nbsp;
                        <select class="custom-select sources" onChange={optionHandler}>
                            {options.map(option => <option value={option.value}>{option.name}</option>)}
                        </select>
                    </p>
                </div>

                <div class="Ip">
                    <p>IP Address</p>
                    <input
                        type="text" onChange={this.editTextHandler.bind(this)}
                    />
                </div>
                <div class="button" onClick={()=>resultState(ip)}>
                    <Button outline color="primary">Calculate</Button>
                </div>

            </div>
        )


    }
}

export default InputBox