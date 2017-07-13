var stdin = process.openStdin();
var fs = require('fs');
console.log("Enter the name of the component :")
stdin.addListener("data", function (d) ***REMOVED***
	var cName = d.toString().trim();
	var viewsPath = "src/views/" + cName;
	var routerPath = "router/"
	var getDirName = require('path').dirname;
	var viewcontents = "<template>\n \n  </template> \n \n <script src='./" + cName + "controller.js'></script>";
	var controllerContents = "export default ***REMOVED*** \n \n data()***REMOVED*** \n return ***REMOVED*** \n ***REMOVED*** \n ***REMOVED***, \n \n mounted()***REMOVED*** \n ***REMOVED***,\n \n methods: ***REMOVED*** \n ***REMOVED***\n \n ***REMOVED***";
	var serviceContents = "import axios from 'axios'";
	var routeContent = "sooraj";
	writeFile(viewsPath, viewcontents, controllerContents, serviceContents, routeContent)

	function writeFile(path, viewcontents, controllerContents, serviceContents, routeContent) ***REMOVED***
		if (!fs.existsSync(path)) ***REMOVED***
			fs.mkdirSync(path);
		***REMOVED***
		fs.writeFile(viewsPath + "/" + cName + ".vue", viewcontents, function (err) ***REMOVED***
			if (err) ***REMOVED***
				console.log(err);
				process.exit();
			***REMOVED*** else ***REMOVED***
				console.log(cName + ".vue file created");
			***REMOVED***
		***REMOVED***);
		fs.writeFile(viewsPath + "/" + cName + "controller.js", controllerContents, function (err) ***REMOVED***
			if (err) ***REMOVED***
				console.log(err);
				process.exit();
			***REMOVED*** else ***REMOVED***
				console.log(cName + ".js controller created");
			***REMOVED***
		***REMOVED***);
		fs.writeFile(viewsPath + "/" + cName + "service.js", serviceContents, function (err) ***REMOVED***
			if (err) ***REMOVED***
				console.log(err);
				process.exit();
			***REMOVED*** else ***REMOVED***
				console.log(cName + ".js service created");
			***REMOVED***
		***REMOVED***);
		fs.readFile("router/index.js", 'utf8', function (err, data) ***REMOVED***
			if (err) ***REMOVED***
				process.exit();
			***REMOVED***
			var imp = "import " + cName + "  from @/views/" + cName + "/" + cName + "\n //ImportModules";
			var rNot = "***REMOVED*** \n path: '/" + cName + "',\n name:'" + cName + "',\n component:'" + cName + "'\n***REMOVED***,\n //routes";
			var result = data.replace(/\/\/ImportModules/g, imp);
			result = result.replace(/\/\/routes/g, rNot);
			fs.writeFile("router/index.js", result, 'utf8', function (err) ***REMOVED***
				if (err) ***REMOVED***
					console.log(err);
					process.exit();
				***REMOVED*** else ***REMOVED***
					process.exit();
				***REMOVED***
			***REMOVED***);
		***REMOVED***);
	***REMOVED***
***REMOVED***);