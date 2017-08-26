import "./style-index.css";
import "./style2.css";

import numeral from "numeral";

const value = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${value} for this course`);
