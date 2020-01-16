const path = require("path");
const webpack =require('webpack')
const context = path.resolve(__dirname,'src')
const cssModuleRules = [
    "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]" // ทำให้เห็นชื่อ class ตอน inspect
              },
              // เพื่อให้ ตัว css ผูกติดกับ moduleที่เรียกใน fileเท่านั้น
              sourceMap: true
            }
          },
          {
              loader:'postcss-loader', // postcss.config.js เป็นตัว config
              options:{
                  sourceMap:true
              }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
]
module.exports = {
  // devtool:'eval', //ใช้ search  ใน file ที่ buildได้ผ่านคำสั่ง debugger
  // devtool:'eval-source-map',
  devtool: "source-map", // ใช้ เพื่อตรวจสอบ debugger
//   context: path.resolve(__dirname, "src"), // Path ตั้งต้น
    context:context,
  
  entry: {
    app: [
      "react-hot-loader/patch",
      "./index" // เริ่มต้นที่ index
    ]
  },
  resolve: {
    alias: {
      Containers: "./containers", // หมายถึง ถ้าใช้ชื่อ Containersที่เป็น keyใน Filejs จะอ้างถึง folderที่เป็น value ของมัน
      Component: path.resolve(context,'theme'),
      Theme:path.resolve(context,'theme')
    },
    extensions:[".js",".json",".scss"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"), //เมื่อ buildเสร็จเอาไปไว้ใน Folder dist
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      //ค้นหา fileที่ลงท้านด้วย js ทั้งหมด , ไม่หาใน nodemodue เข้าไปยัง babel-loader
      { test:/\.js$/,exclude:/node_modules/,loader:'babel-loader' },
      { test:/\.css$/, exclude:/node_modules/, use:cssModuleRules }, //ไม่โหลด file ที่เป็น css ใน nodmodules
      { test:/\.css$/, include:/node_modules/,use:['style-loader','css-loader'] }, // ถ้าfile css อยู่ใน node moudule ใหเโหลดเข้าที่  css-loader-> style-loader
      {
        test: /\.scss$/, // หาfileที่ลงท้ายด้วย css
        // use:['style-loader','css-loader','sass-loader'] //จะอ่านจากขวามาซ้าย
        // เป็นการset การอ่าน file scss
        use: [
            ...cssModuleRules,
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
      new webpack.ProvidePlugin({
        'jQuery':'jquery', // Jquery มากจาก ชื่อที่ที่ใช้ใน bootstrap และ jquery มาจากชื่อ package jquery ที่ มาจากใน File package.json
        'Tether':'tether' // Tether ชื่อมาที่ package tether
    }),
      new webpack.HotModuleReplacementPlugin() // ทำให้โหลดเฉพาะส่วนที่เปลี่ยนแปลง
  ],
  devServer:{
      contentBase: path.join(__dirname,'public'), //เวลา run ให้ไปที่ folder public
      hot:true, // จะเป็นการใส่คำสั่งใน scripts --dev แทน คำสั่ง --hot
      historyApiFallback:true, // ถ้าหากเข้า ผิด path ได้ 404 Not found จะย้อนไปที่ public/index.html
      proxy:{
        "/api":"http://localhost:5000" //set pathdefault ของ Ajax
      }
    }
};
