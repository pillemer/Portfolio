import { formSteps } from './formConfig';

export type FormData = {
    // Step 1: Basic Info
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    
    // Step 2: Practice Details
    practiceStage: string;
    currentWebsite: string;
    
    // Step 3: Project Details
    services: string[];
    timeline: string;
    budget: string;
    message: string;
};

export type StepErrors = Record<string, string>;

export function validateStep(step: number, formData: FormData): StepErrors {
    const stepErrors: StepErrors = {};
    const { requiredFields } = formSteps[step];

    requiredFields.forEach(field => {
        const value = formData[field as keyof FormData];
        if (!value || (Array.isArray(value) && value.length === 0)) {
            stepErrors[field] = 'This field is required';
        }
    });

    // Email validation
    if (step === 0 && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (basic UK format) - only if phone is provided
    if (step === 0 && formData.phone !== '' && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
        stepErrors.phone = 'Please enter a valid phone number';
    }

    return stepErrors;
}
