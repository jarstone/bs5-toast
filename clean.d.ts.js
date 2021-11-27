const fs = require('fs')
let content = fs.readFileSync('./dist/bs5-toast.d.ts', 'utf8')
content.split(/\r?\n/).forEach((line) => {
	// Remove private properties & methods
	if (line.trim().startsWith('"__#')) {
		content = content.replace(line, '')
	}
})

fs.writeFileSync('./dist/bs5-toast.d.ts', content)
