let ffi = require('ffi-napi');
let path = require('path');

// 开发测试环境路径
// const libPath = "../plugins/rust_api/target/release/librust_api"

// 生产环境路基
const libPath = "lib/api/librust_api"

// 定义js调用rust方法
function ffiLib(libPath, callback) {
    return ffi.Library(path.join(__dirname, libPath), callback);
}

// string转成json字符串
function str2json(str) {
    // 正则匹配 json对象
    var regex3 = /\{(?<=\{).*(?=\})\}/;
    let arr = str.match(regex3)
    str = (arr != null) ? arr[0] : '';
    return JSON.parse(str)
}

/// npm install electron --save-dev
/// npm run-script packager