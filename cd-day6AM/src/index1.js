import {multi} from './util-es6';
const util=require("./util");
import './css/main1.css';
import bai from './images/a.png';

window.onload=function () {
    let m=util.sum(2,12);
    let m1=multi(4,5);
    console.log(bai);
    let ico=new Image();
    ico.src=bai;
    document.body.appendChild(ico);
}

