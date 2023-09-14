var fs = require('mz/fs');
var vscode = require('vscode');
var path = require('path');

const i18nMessages = {
	'en': JSON.parse(fs.readFileSync(path.join(__dirname, '../package.nls.json')))
};
const defaultLocale = 'en';
const locale = (vscode.env.language || defaultLocale).toLowerCase();
const localize = (info) => {
	if (locale in i18nMessages && info in i18nMessages[locale]) {
		return i18nMessages[locale][info]
	} else {
		return i18nMessages[defaultLocale][info]
	}
}

module.exports = localize;