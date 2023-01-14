//We can import using element name separately
import { code } from './modules/user.js';
import { name } from './modules/user.js';


//If we have to import various elements of a js file then we can import as following
import { withdraw , deposit } from './modules/account.js'


/*if we want to import maximum number  of  the exported elements which we can not mention 
 by writing the name of element one by one then we can use following syntax*/
import * as usr_details from './modules/details.js'

//we have to mention new name given in the import detail
as.asr();

console.log(name);
code();

withdraw();

