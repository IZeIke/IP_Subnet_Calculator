import React, {Component} from "react"
import { Table, Container, Row, Col } from 'reactstrap';

class ResultBox extends Component{

    render(){
        let{
            ip,
            networkAddress,
            usableHostIPRange,
            broadcastAddress,
            subnetMark,
            hosts,
            totalHost,
            wildcard,
            binarySubnet,
            ipClass,
            cidr,
            ipType,
            binaryId,
            integerId,
            hexId,

        } = this.props

        return(
            <div class="ResultBox">
                <div class="ResultHead">
                    <h2>Result</h2>
                </div>
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
            <Table size="sm" hover>
                <tbody>
                <tr>
                    <td>IP Address</td>
                    <td>{ip}</td>
                </tr>
                <tr>
                    <td>Network Address</td>
                    <td>{networkAddress}</td>
                </tr>
                <tr>
                    <td>Usable Host IP Range</td>
                    <td>{usableHostIPRange}</td>
                </tr>
                <tr>
                    <td>Broadcast Address</td>
                    <td>{broadcastAddress}</td>
                </tr>
                <tr>
                    <td>Total Number of Hosts</td>
                    <td>{totalHost}</td>
                </tr>
                <tr>
                    <td>Number of Usable Hosts</td>
                    <td>{hosts}</td>
                </tr>
                <tr>
                    <td>Subnet Mask</td>
                    <td>{subnetMark}</td>
                </tr>
                <tr>
                    <td>Wildcard Mask</td>
                    <td>{wildcard}</td>
                </tr>
                <tr>
                    <td>Binary Subnet Mask</td>
                    <td>{binarySubnet}</td>
                </tr>
                <tr>
                    <td>IP Class</td>
                    <td>{ipClass}</td>
                </tr>
                <tr>
                    <td>CIDR Notation</td>
                    <td>{cidr}</td>
                </tr>
                <tr>
                    <td>IP Type</td>
                    <td>{ipType}</td>
                </tr>
                <tr>
                    <td>Short</td>
                    <td>{ip}{cidr}</td>
                </tr>
                <tr>
                    <td>Binary ID</td>
                    <td>{binaryId}</td>
                </tr>
                <tr>
                    <td>Integer ID</td>
                    <td>{integerId}</td>
                </tr>
                <tr>
                    <td>Hex ID</td>
                    <td>{hexId}</td>
                </tr>
                </tbody>
            </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            </div>
        )


    }
}

export default ResultBox