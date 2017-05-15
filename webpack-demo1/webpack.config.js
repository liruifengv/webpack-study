/**
 * Created by æ…√Œ on 2017/5/15.
 */
var path=require('path');

module.exports={
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
};

