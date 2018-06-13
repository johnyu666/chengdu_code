const path=require('path');
module.exports={
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase:'./dist'
    },
    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader','css-loader']},

            {test:/\.(png|jpg|ico)$/, use: 'file-loader'},

            {test:/\.js$/, exclude: /node_modules/,
                use: {loader: "babel-loader", options: {
                        presets:['env','react']
                    }}
            }
        ]
    }

}