/**
 * Created by 旧梦 on 2017/5/15.
 */
var webpack=require('webpack');
var path=require('path');

module.exports=function(env){
    return{
        entry:{
            main:'./index.js',
            vendor:'moment'
        },

        output:{
            filename:'[chunkhash].[name].js',
            path:path.resolve(__dirname,'dist')
        },
        plugins:[
            new webpack.optimize.CommonsChunkPlugin({
                name:['vendor','manifest'] //指定公共 bundle 的名字。
            })
        ]
    }
}