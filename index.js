var fetch = require("node-fetch");
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
async function getFic(id) {
	let result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/fanfic?id=${id}`)).json())
	if (result.success === true){
		return result;
	} else {
		throw new APIError({
			code: 1,
			message: result.error
		});
	};
	
};
async function getAuthor(id) {
	try{
	let result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/authors?id=${id}`)).json());
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
async function getRequest(id) {
	try{
	let result = (await (await fetch(`https://ficbook-parser-server-part.herokuapp.com/requests?id=${id}`)).json());
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
	getRequest
};