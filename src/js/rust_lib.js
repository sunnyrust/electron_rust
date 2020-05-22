// node调用rust

let obj = ffiLib(libPath, {
    'res_json': ['string', []],
});

var rustLib = document.getElementById("rust_lib");
rustLib.onclick = function () {
    test_str = str2json(obj.res_json())

    let mytext = document.querySelector('#rust_json')
    mytext.innerHTML = JSON.stringify(test_str)
}