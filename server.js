// IMPORT AND SETUP

const express = require('express');
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, 'env/.env') }) 
const { MongoClient, ServerApiVersion } = require('mongodb');

// clean this shit up later
const username = encodeURIComponent(process.env.MONGO_DB_USERNAME);
const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
const dbName = process.env.MONGO_DB_NAME;
const collectionName = process.env.MONGO_COLLECTION;

const uri = `mongodb+srv://mtruesda:${password}@cluster0.fvqe26w.mongodb.net/?retryWrites=true&w=majority`

if (process.argv.length !== 3) {
    console.log("Usage: node ./server.js <PORT NUMBER>");
    process.exit(1);
}

const portNumber = process.argv[2];
const app = express();

process.stdin.setEncoding("utf8");

app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/files', express.static(path.join(__dirname, 'files')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(portNumber, () => {
    process.stdout.write(`Web server started and running at http://localhost:${portNumber}\n`);
    
    const prompt = "Stop to shutdown the server: ";
    process.stdout.write(prompt);

    process.stdin.on("readable", function() {
        let dataInput = process.stdin.read();
        if(dataInput !== null) {
            let command = dataInput.trim();
            if (command === "stop") {
                process.stdout.write("Shutting down the server\n");
                process.exit(0);
            } else {
                process.stdout.write("invalid command: " + command + "\n");
            }
            process.stdout.write(prompt);
            process.stdin.resume();
        }
    })
});

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/projects', (req, res) => {
    res.render('projects.ejs')
});

app.get('/research', (req, res) => {
    res.render('research.ejs');
});

app.get('/work', (req, res) => {
    res.render('work.ejs');
});

app.get('/resume', (req, res) => {
    const file = path.join(__dirname, '/files/ResumeMyronTruesdale.pdf');
    res.download(file);
});

app.get('/login', (req, res) => {
    res.render('login.ejs')
});

// to be used later for handling comments
// idea is that id will be used to redirect while the post method will be used for posting the comments onto the page.
// need to handle login pages as well :/
app.post('/:id', (req, res) => {});
