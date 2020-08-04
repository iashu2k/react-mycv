import React from 'react';
import Skill from './skills';

const Domain = ({e}) => {
    return (
        <div>
          <div className="font-semibold text-base">{e.title}</div>
          <div className="border-b-2 w-8 border-blue-600"></div>
          {e.skills.map( x => <Skill skills={x} />)}
        </div>
      );
}
 
export default Domain;
