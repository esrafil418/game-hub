module.exports = {
	plugins: ["stylelint-scss"],
	rules: {
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
				],
			},
		],
	},
};
