define(function (require) {
	'use strict';
	return {
		hello: require('text!templates/Hello.tmpl'),
		header: require('text!templates/HelloHeader.tmpl'),
		jobCount: require('text!templates/JobCount.tmpl')
		// radHeader: require('text!templates/RadHeader.tmpl'),
		// mtlxcutLayout: require('text!templates/mtlxcutLayout.tmpl'),
		// stdCutOperations: require('text!templates/stdCutOperations.tmpl'),
		// nonStdCutOperations: require('text!templates/nonStdCutOperations.tmpl'),
		// activeOperation: require('text!templates/activeOperation.tmpl'),
		// jobCount: require('text!templates/jobCount.tmpl')
	};
});
