import React, { Component } from 'react';
import logo from './img/ic_import_export_white_24px.svg';
import './App.css';
import Header from "./Header";
import ip from 'ip';
import binaryIp from './binaryIp';
import InputBox from "./Input-Box";
import ResultBox from "./ResultBox";
import renderIf from './renderIf';
import Footer from "./Footer";

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            options: this.generateSubnet(32),
            networkClass: "any",
            subnetNumber: "32",
            ip: "192.168.1.134",
            ResultState: false,


            ipAddress: "158.108.12.34",
            networkAddress: "158.108.12.0",
            usableHostIPRange: "158.108.12.1 - 158.108.12.254",
            broadcastAddress: "158.108.12.255",
            totalHost: "1",
            hosts: "0",
            subnetMark: "255.255.255.255",
            usableHosts: "254",
            subnetValue: "24",
            wildcardMask: "0.0.0.255",
            binarySubnet: "",
            ipClass: "C",
            cidr: "/24",
            ipType: "Public",
            binaryId: "",
            integerId : "",
            hexId: "",
        }
    }


    generateSubnet(quantity) {
        return Array(quantity).fill().map((_, i) => {
            return {
                name: ip.fromPrefixLen(32-i) + ' / ' + (32-i),
                value: 32-i,
                number: ip.fromPrefixLen(32-i)
            }
        })
    }

    networkClassHandler(event) {
        this.setState({
            networkClass: event.target.value,
            subnetValue: 24,
        }, this.manageOptions)
    }

    optionHandler(event) {
        this.setState({
            subnetNumber: event.target.value
        })
    }

    hostCalculate()
    {
        let host = Math.pow(2,32 - this.state.subnetNumber)
        return host
    }

    ipClassCalculate(num1,num2,num3)
    {
        if(num1 == "255" && num2 == "255" && num3 == "255")
        {
            return "C"
        }else
        if(num1 == "255" && num2 == "255")
        {
            return "B"
        }else
        if(num1 == "255" && num3 == "255")
        {
            return "A"
        }else
        if(num1 == "255")
        {
            return "A"
        }else
        {
            return 'None'
        }
    }

    buttonHandler(ipText){
        if(ipText == "")
        {
            alert("Input IP Address")
            return;
        }else
        if(!ip.isV4Format(ipText)){
            alert("Wrong Format IPV4")
            return;
        }

        let subnetInfo = ip.subnet(ipText, ip.fromPrefixLen(this.state.subnetNumber))
        let ipClassBuffer = ip.toBuffer(subnetInfo.subnetMask)
        let ipClass = this.ipClassCalculate(ipClassBuffer[0],ipClassBuffer[1],ipClassBuffer[2])
        let binarySubnet = binaryIp(subnetInfo.subnetMask)
        let hostRange =  subnetInfo.firstAddress == subnetInfo.lastAddress ? 'None' : subnetInfo.firstAddress +" - "+ subnetInfo.lastAddress
        this.setState({
            ip: ipText,
            ResultState: true,
            networkAddress: subnetInfo.networkAddress,
            usableHostIPRange: hostRange ,
            broadcastAddress: subnetInfo.broadcastAddress ,
            totalHost: this.hostCalculate(),
            hosts: this.hostCalculate() - 2 < 0 ? 0 : this.hostCalculate() - 2,
            subnetMark: subnetInfo.subnetMask,
            wildcardMask : ip.not(subnetInfo.subnetMask),
            binarySubnet: binarySubnet,
            ipClass: ipClass,
            cidr: "/"+this.state.subnetNumber,
            ipType: ip.isPrivate(ipText) ? "Private" : "Public",
            binaryId: ip.toLong(ipText).toString(2),
            integerId: ip.toLong(ipText),
            hexId: ip.toLong(ipText).toString(16),


        })
    }

    manageOptions() {
        let options
        if (this.state.networkClass === "any") {
            options = this.generateSubnet(32)
        }
        if (this.state.networkClass === "a") {
            options = this.generateSubnet(25)
        }
        if (this.state.networkClass === "b") {
            options = this.generateSubnet(17)
        }
        if (this.state.networkClass === "c") {
            options = this.generateSubnet(9)
        }
        this.setState({ options })
    }

  render() {

        let {
            options,
            ResultState,
            ip,
            networkAddress,
            usableHostIPRange,
            broadcastAddress,
            subnetMark,
            totalHost,
            hosts,
            wildcardMask,
            binarySubnet,
            ipClass,
            cidr,
            ipType,
            binaryId,
            integerId,
            hexId,

        } = this.state

    return (
      <div className="App">
        <header className="App-header">
            <Header/>
          <img src={logo} className="App-logo" alt="logo" />

        </header>

          <InputBox
              options={options}
              networkClassHandler = {this.networkClassHandler.bind(this)}
              resultState = {this.buttonHandler.bind(this)}
              optionHandler = {this.optionHandler.bind(this)}
          />

          {renderIf(ResultState)(
          <ResultBox
              ip={ip}
              networkAddress={networkAddress}
              usableHostIPRange={usableHostIPRange}
              broadcastAddress={broadcastAddress}
              subnetMark={subnetMark}
              totalHost={totalHost}
              hosts={hosts}
              wildcard={wildcardMask}
              binarySubnet={binarySubnet}
              ipClass={ipClass}
              cidr={cidr}
              ipType={ipType}
              binaryId={binaryId}
              integerId={integerId}
              hexId={hexId}
          />
          )}

          <Footer/>
      </div>
    );
  }
}

export default App;
