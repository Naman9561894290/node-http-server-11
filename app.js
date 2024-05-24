const http = require("http")
const fs = require("fs")

// this is a comment from git hub repo.....
const app = http.createServer((req, res) => {
    if (req.url === "/") {
        const pageData = fs.readFileSync("pages/index.html")
        // res.write("<h1>Server started....<h1>")
        res.write(pageData)
        res.end()
    }
    else if (req.url === "/about") {
        const pageData = fs.readFileSync("pages/about.html")
        // res.write("<h1>About Page....<h1>")
        res.write(pageData)
        res.end()
    }
    else if (req.url === "/contact") {
        const pageData = fs.readFileSync("pages/contact.html")
        // res.write("<h1>Contact Page....<h1>")
        res.write(pageData)
        res.end()
    }
    else {
        const pageData = fs.readFileSync("pages/404.html")
        res.writeHead(404, { "Content-Type": "text/html" })
        res.write(pageData)
        // res.write("<h1>404 error Page Not Found....<h1>")
        res.end()
    }
})

// app.listen(port,ip,callback-function)
app.listen(3000, () => {
    console.log("server started on http://127.0.0.1:3000")
})


// 200-299 ok states req and res success
// 300-399 information states req and res success
// 400-499 req fail/req not found/invalid req
// 500-599 req sucess but res failed
