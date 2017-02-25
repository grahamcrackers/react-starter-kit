import React from 'react';
import {Link} from 'react-router';
import { Button } from 'react-toolbox/lib/button';

const HomePage = () => {
  return (
    <div>
      <h1>React Starter Kit</h1>
        
        <div>
            <Button label="Hello Graham!" raised/>
        </div>
    </div>
  );
};

export default HomePage;