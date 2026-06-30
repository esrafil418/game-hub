module.exports = {
	extends: ["stylelint-config-standard"],
	rules: {
		// Ignore all Tailwind-specific at-rules
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"theme",
					"tailwind",
					"layer",
					"apply",
					"custom-media",
					"scope",
					"utility",
					"source",
					"screen",
					"responsive",
				],
			},
		],
		// Same for SCSS
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"theme",
					"tailwind",
					"layer",
					"apply",
					"custom-media",
					"scope",
					"utility",
					"source",
					"screen",
					"responsive",
				],
			},
		],
	},
};
