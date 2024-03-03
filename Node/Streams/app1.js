const fs = require('fs')

const escrita = fs.createWriteStream('./output.txt')

escrita.write('New text.\n')
