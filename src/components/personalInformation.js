import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export default function Personalform() {

    return (
        
        <CardContent>
        <Typography gutterBottom variant="subtitle2" component="h2">
            ชื่อ
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            สมปอง
          </Typography>
        <CardActions>
            <Typography gutterBottom variant="subtitle2" component="h2">
            เพศ 
          </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
            ชาย
          </Typography>
            </CardActions>
            
        <CardActions>
            <Typography gutterBottom variant="subtitle2" component="h2">
            อายุ
          </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
                22
          </Typography>
        
          </CardActions>
          </CardContent>

    );
    
}