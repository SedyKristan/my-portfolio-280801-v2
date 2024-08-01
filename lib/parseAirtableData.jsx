import lodash from "lodash";

/**
 * @param {object} formFields Object fetched from airtable sourcing
 * @returns {object} Parsed object to fit createFormField
 */

export const parseAirtableData = ({ formFields, isFormField }) => {
	formFields = formFields.map((formField) => {
		let columns = Object.keys(formField);

		if (!formField || !columns) return formField;

		let parsedObject = {};
		columns.forEach((column) => {
			let parsedColumn = lodash.camelCase(column);
			parsedObject[parsedColumn] = formField[column] || null;
		});

		return parsedObject;
	});

	if (!isFormField) return formFields;

	// Get all unique form sections from the form field data query
	let formSections = formFields.reduce((formSections, formField) => {
		let sectionName = formField.section;

		// Maps form field data to corresponding section
		let currentSection = formSections.find(
			(formSection) => formSection.section === sectionName
		);
		let currentSectionFields = currentSection
			? currentSection.fields
			: [];

		// Parses data object to match standard structure
		if (
			formField.options &&
			formField.options.length > 0 &&
			(formField.type === "select" ||
				formField.type === "multiselect")
		) {
			formField.options = formField.options.map((option) => {
				if (typeof option === "object") {
					return option;
				}
				return {
					value: option,
					label: option
				};
			});
		}
		formField.followUpQuestions =
			formField.followUpQuestionsName || [];
		formField.isRequired = !!formField.required;

		currentSectionFields = [...currentSectionFields, formField];
		currentSectionFields = currentSectionFields.sort(
			(firstFormField, secondFormField) =>
				firstFormField.order - secondFormField.order
		);

		let newFormSection = {
			module: formField.module || null,
			section: formField.section || null,
			link: formField.sectionLink || null,
			fields: currentSectionFields || null,
			order: formField.sectionOrder || null,
			sectionId: formField.sectionId || null,
			message: formField.sectionMessage || null,
			subtitle: formField.moduleSubtitle || null,
			subsectionOrder: formField.subsectionOrder || null,
			link: formField.sectionLink || null
		};

		let tempFormSections = formSections.filter(
			(formSection) => formSection.section !== sectionName
		);
		tempFormSections = [...tempFormSections, newFormSection];

		return tempFormSections;
	}, []);

	return formSections;
};
