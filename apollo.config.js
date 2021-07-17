module.exports = {
	client: {
		includes: ["./graphql/*.ts"],
		service: {
			name: "scores-api",
			url: "http://localhost:3000/api/graphql",
			// optional disable SSL validation check
			skipSSLValidation: true,
		},
	},
};