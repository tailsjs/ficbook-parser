var fetch = require("node-fetch");
	MODULE_VERSION = "1.3"
class APIError extends Error {
/**
* @param {Object} params - Параметры ошибки
* @param {Number} params.code - Код ошибки
* @param {String} params.message - Сообщение ошибки
*/
constructor(params) {
const { code, message } = params;

super(message);

this.code = code;
this.message = message;
this.name = this.constructor.name;

Error.captureStackTrace(this, this.constructor);
}
}
async function getFic(id, random) {
	var result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/fanfic?id=${id}${random ? `&random=true` : ""}`)).json())
	if (result.success === true){
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};	
};
async function getChangelogs() {
	var result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/changelogs`)).json())
	if (result.success === true){
		if(result.MODULE.VERSION != MODULE_VERSION){
			console.log(`Your version of the "ficbook-parser" module is out of date! We ask you to update it. NEW VERSION: ${result.MODULE.VERSION}, YOUR VERSION: ${MODULE_VERSION}`)
		}
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};	
};
async function getAuthor(id, getComms) {
	try{
	var result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/authors?id=${id}${getComms ? `&comments=true` : ""}`)).json());
	}catch(e){
		throw new APIError({
			code: 1,
			message: "There is no such author!"
		});	
	}
	if (result.success === true){
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};
};
async function getFicPart(id, part) {
	try{
	var result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/ficparts?id=${id}&part=${part}`)).json());
	}catch(e){
		throw new APIError({
			code: 1,
			message: "There is no such part!"
		});	
	}
	if (result.success === true){
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};
};
async function getRequest(id) {
	try{
		var result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/requests?id=${id}`)).json());
	}catch(e){
		throw new APIError({
			code: 1,
			message: "There is no such request!"
		});	
	}
	if (result.success === true){
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};
};
module.exports = {
	getFic,
	getAuthor,
	getChangelogs,
	getRequest,
	getFicPart
};