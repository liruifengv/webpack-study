/**
 * Created by æ…√Œ on 2017/5/15.
 */

import _ from 'lodash';

function component(){
    var element=document.createElement('div');

    element.innerHTML= _.join(['Hello ',' webpack'],' ');

    return element;
}

document.body.appendChild(component());