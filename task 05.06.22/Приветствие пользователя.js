/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
 const getWelcomeMessage = user => {
	return `Welcome ${user.fullName ?? "user"}`
}

// Sample usage - do not modify
console.log(getWelcomeMessage({fullName: "Sam Green"})); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"