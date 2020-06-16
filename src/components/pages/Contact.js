import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import '../../App.css';
export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h1 className="sect-title">Our Contact Detail</h1>
                <p>Please Follow Us Given Contact Addresses.</p>
                <div className="contact-cards">
                <Grid container justify="center">
                    <Grid item xs={5} md={2} component={Card} className="card card-infected">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Phone Number</Typography>
                            <Typography color="textSecondary" className="card-date">Coming Soon..</Typography>
                        </CardContent>
                    </Grid><Grid item xs={5} md={2} component={Card} className="card card-recovered">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Email Address</Typography>
                            <Typography color="textSecondary" className="card-date">info@getinfoline.com</Typography>
                        </CardContent>
                    </Grid><Grid item xs={5} md={2} component={Card} className="card card-death">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Official Address</Typography>
                            <Typography color="textSecondary" className="card-date">Karachi. Pakistan</Typography>
                        </CardContent>
                    </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}