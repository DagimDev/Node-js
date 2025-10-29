// const express = require("express")
// const os = require("os")
const fs = require("fs")
fs.readFile("./abe.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

// const platform = os.platform()
// console.log(platform)