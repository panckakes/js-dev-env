/**
 * Created by Michael on 6/11/17.
 */

export function authorsFormattedForDropdown(authors) {
	return authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});
}
