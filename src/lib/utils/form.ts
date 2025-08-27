export type FormData = {
    // Step 1: Basic Info
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    
    // Step 2: Practice Details
    practiceType: string;
    practiceStage: string;
    currentWebsite: string;
    
    // Step 3: Project Details
    services: string[];
    timeline: string;
    budget: string;
    
    // Step 4: Booking
    preferredDate: string;
    preferredTime: string;
    message: string;
};

export type StepErrors = Record<string, string>;

export function validateStep(step: number, formData: FormData, stepFields: string[]): StepErrors {
    const stepErrors: StepErrors = {};

    stepFields.forEach(field => {
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

export function getAvailableDates(): Array<{ value: string; label: string }> {
    const dates = [];
    const today = new Date();
    let count = 0;
    let current = new Date(today);
    
    while (count < 14) {
        current.setDate(current.getDate() + 1);
        const dayOfWeek = current.getDay();
        
        // Skip weekends
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            dates.push({
                value: current.toISOString().split('T')[0],
                label: current.toLocaleDateString('en-GB', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                })
            });
            count++;
        }
    }
    
    return dates;
}
