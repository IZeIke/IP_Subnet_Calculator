import React, {Component} from "react"
import { Table, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';

class ResultBox extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

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


            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>

                        <div class="ResultHead">
                            <h2>Result</h2>
                        </div>

                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    All Possible Networks
                                </NavLink>
                            </NavItem>
                        </Nav>

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