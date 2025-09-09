export const formSteps = [
    {
        id: 'personal',
        requiredFields: ['firstName', 'lastName', 'email'],
        optionalFields: ['phone']
    },
    {
        id: 'practice',
        requiredFields: ['practiceStage'],
        optionalFields: ['currentWebsite']
    },
    {
        id: 'project',
        requiredFields: ['services', 'timeline', 'budget'],
        optionalFields: ['message']
    }
];
