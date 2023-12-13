import React from 'react';
import './styles.css';

const MemberItem = ({ name, surname, position, photoUrl, color }) => {
    return (
        <div className='worker-info'>
            <div className="name-surname">
                <p className='name'>{name} {surname}</p>
            </div>
            <p className="position" style={{color: color ?? 'black'}}>{position}</p>
            <div className="photo">
                <img src={photoUrl} alt={`${name} ${surname}`} />
            </div>
        </div>
    );
};

export default MemberItem;