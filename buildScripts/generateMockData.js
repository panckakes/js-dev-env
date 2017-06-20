/*script that generates mock data for local dev.
dont have to point to an actual api right away.
allows for randomized data

can use '?useMockApi=true' in url to switch between production and dev builds
 */

 /* eslint-disable no-console */

 import jsf from 'json-schema-faker';
 import {schema} from './mockDataSchema';
 import fs from 'fs';
 import chalk from 'chalk';

 const json = JSON.stringify(jsf(schema));

 fs.writeFile("./src/api/db.json", json, function (err) {
	if(err) {
		return console.log(chalk.red(err));
			} else {
		console.log(chalk.green("Mock data generated"));
		}
 });
