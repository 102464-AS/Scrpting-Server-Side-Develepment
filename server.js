// server.js 
// 1. We importeren de ingebouwde 'http' module van Node.js 
import http from 'node:http'; 
import fs from 'node:fs'; 
 
const hostname = '127.0.0.1'; // Localhost 
const port = 3000;            // De poort waarop we luisteren 
 
// 2. We maken de server aan. Deze functie wordt uitgevoerd bij ELK verzoek (request). 
const server = http.createServer((req, res) => { 
    // We kijken naar de URL die opgevraagd wordt (req.url) 
     
    if (req.url === '/') { 
        // HOME PAGINA 
        // We lezen het bestand 'index.html' van de harde schijf 
        fs.readFile('index.html', (err, data) => { 
            if (err) { 
                // Ging er iets mis met lezen? (Bv. bestand bestaat niet) 
                res.writeHead(500); 
                res.end('Server Error'); 
            } else { 
                // Gelukt! Stuur de HTML data terug naar de browser 
                res.writeHead(200, {'Content-Type': 'text/html'}); 
                res.end(data); 
            } 
        }); 
 
    } else if (req.url === '/about') { 
        // ABOUT PAGINA 
        fs.readFile('about.html', (err, data) => { 
            if (!err) { 
                res.writeHead(200, {'Content-Type': 'text/html'}); 
                res.end(data); 
            } 
        }); 
 
    } else { 
        // 404 - PAGINA NIET GEVONDEN 
        fs.readFile('404.html', (err, data) => { 
            res.writeHead(404, {'Content-Type': 'text/html'}); 
            res.end(data); 
        }); 
    } 
}); 
 
// 6. Start de server en laat hem luisteren op poort 3000 
server.listen(port, hostname, () => { 
    console.log(`Server draait op http://${hostname}:${port}/`); 
}); 