var stdin = process.openStdin();
var fs = require('fs');
console.log("Enter the name of the component :")
stdin.addListener("data", function (d) {
	var cName = d.toString().trim();
	var viewsPath = "src/views/" + cName;
	var routerPath = "router/"
	var getDirName = require('path').dirname;
	var viewcontents = "<template>\n \n  </template> \n \n <script src='./" + cName + "controller.js'></script>";
	var controllerContents = "export default { \n \n data(){ \n return { \n } \n }, \n \n mounted(){ \n },\n \n methods: { \n }\n \n }";
	var serviceContents = "import axios from 'axios'";
	var routeContent = "sooraj";
	writeFile(viewsPath, viewcontents, controllerContents, serviceContents, routeContent)

	function writeFile(path, viewcontents, controllerContents, serviceContents, routeContent) {
		if (!fs.existsSync(path)) {
			fs.mkdirSync(path);
		}
		fs.writeFile(viewsPath + "/" + cName + ".vue", viewcontents, function (err) {
			if (err) {
				console.log(err);
				process.exit();
			} else {
				console.log(cName + ".vue file created");
			}
		});
		fs.writeFile(viewsPath + "/" + cName + "controller.js", controllerContents, function (err) {
			if (err) {
				console.log(err);
				process.exit();
			} else {
				console.log(cName + ".js controller created");
			}
		});
		fs.writeFile(viewsPath + "/" + cName + "service.js", serviceContents, function (err) {
			if (err) {
				console.log(err);
				process.exit();
			} else {
				console.log(cName + ".js service created");
			}
		});
		fs.readFile("router/index.js", 'utf8', function (err, data) {
			if (err) {
				process.exit();
			}
			var imp = "import " + cName + "  from @/views/" + cName + "/" + cName + "\n //ImportModules";
			var rNot = "{ \n path: '/" + cName + "',\n name:'" + cName + "',\n component:'" + cName + "'\n},\n //routes";
			var result = data.replace(/\/\/ImportModules/g, imp);
			result = result.replace(/\/\/routes/g, rNot);
			fs.writeFile("router/index.js", result, 'utf8', function (err) {
				if (err) {
					console.log(err);
					process.exit();
				} else {
					process.exit();
				}
			});
		});
	}
});