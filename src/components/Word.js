import React from 'react';
import './Word.css';

const Word = (props) => {
    return ( 
            <li>Word in French: <strong>{props.fre}</strong>. Translation: <strong>{props.eng}</strong>.</li>    
   );
}
 
export default Word;