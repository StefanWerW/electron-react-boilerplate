import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, ResponsiveEmbed, Panel, ButtonToolbar } from 'react-bootstrap';
import { increment, decrement } from '../actions/counter'


const Home = ({ counter, increment, decrement }) =>  {
    return (
        <Grid fluid = {true}>
            <Row>
                <Col sm={4} xs={6}>
                    <Panel header="Total">
                        {counter}
                    </Panel>
                </Col>
                <Col sm={4} xs={6}>
                    <Panel header="Actions">
                        <ButtonToolbar>
                            <Button bsStyle="primary" onClick={increment}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </Button>
                            <Button bsStyle="danger" onClick={decrement}>
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </Button>
                        </ButtonToolbar>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    );
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, { increment, decrement })(Home);
