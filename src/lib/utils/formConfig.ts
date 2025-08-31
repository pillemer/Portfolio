export const formSteps = [
    {
        id: 'personal',
        requiredFields: ['firstName', 'lastName', 'email'],
        optionalFields: ['phone']
    },
    {
        id: 'practice',
        requiredFields: ['practiceType', 'practiceStage'],
        optionalFields: ['currentWebsite']
    },
    {
        id: 'project',
        requiredFields: ['services', 'timeline', 'budget'],
        optionalFields: []
    },
    {
        id: 'booking',
        requiredFields: ['preferredDate', 'preferredTime'],
        optionalFields: ['message']
    }
];
