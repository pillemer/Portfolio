<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { siteContent } from '$lib/utils/content';
	import { validateStep, type FormData, type StepErrors } from '$lib/utils/form';
	import { getAvailableDates } from '$lib/utils/form';

	const content = siteContent.contact;

	// Form state
	let currentStep = 0;
	let formData: FormData = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		practiceType: '',
		practiceStage: '',
		currentWebsite: '',
		services: [],
		timeline: '',
		budget: '',
		preferredDate: '',
		preferredTime: '',
		message: ''
	};

	let errors: StepErrors = {};
	let isSubmitting = false;
	let submitted = false;
	let focusedField: string | null = null;

	// Navigation
	function nextStep() {
		const stepErrors = validateStep(currentStep, formData, content.steps[currentStep].fields);
		if (Object.keys(stepErrors).length === 0) {
			currentStep = Math.min(currentStep + 1, content.steps.length - 1);
		} else {
			errors = stepErrors;
		}
	}

	function prevStep() {
		currentStep = Math.max(currentStep - 1, 0);
		errors = {};
	}

	// Form submission
	async function handleSubmit() {
		const stepErrors = validateStep(currentStep, formData, content.steps[currentStep].fields);
		if (Object.keys(stepErrors).length === 0) {
			isSubmitting = true;
			
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			// In real implementation, send to your backend
			console.log('Form submitted:', formData);
			
			submitted = true;
			isSubmitting = false;
		} else {
			errors = stepErrors;
		}
	}

	// Utility functions
	function updateField(field: keyof FormData, value: any) {
		formData[field] = value;
		if (errors[field]) {
			delete errors[field];
			errors = { ...errors };
		}
	}

	function toggleService(service: string) {
		const current = formData.services || [];
		formData.services = current.includes(service)
			? current.filter(s => s !== service)
			: [...current, service];
	}

	$: availableDates = getAvailableDates();
	$: progressPercentage = ((currentStep + 1) / content.steps.length) * 100;
	$: currentStepData = content.steps[currentStep];
</script>

<svelte:head>
	<title>{content.meta.title}</title>
	<meta name="description" content={content.meta.description} />
</svelte:head>

{#if submitted}
	<!-- Success State -->
	<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 p-4">
		<div class="max-w-md w-full text-center" in:scale={{ duration: 600, easing: quintOut }}>
			<div class="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
				<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
					</svg>
				</div>
				<h2 class="text-2xl font-bold text-slate-900 mb-4">{content.successMessage.title}</h2>
				<p class="text-slate-600 mb-6">{content.successMessage.message}</p>
				<div class="space-y-3">
					{#each content.successMessage.features as feature}
						<div class="flex items-center justify-center gap-2 text-sm text-slate-500">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
									d={feature.includes('24 hours') ? 
										"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" : 
										"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}
								/>
							</svg>
							<span>{feature}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- Main Form -->
	<section class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 px-4">
		<div class="max-w-4xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-12" in:fade={{ duration: 800 }}>
				<h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
					{content.header.title}
				</h1>
				<p class="text-xl text-slate-600 max-w-2xl mx-auto">
					{content.header.subtitle}
				</p>
			</div>

			<!-- Step Indicators and Progress -->
			<div class="mb-12 relative" in:fly={{ y: 20, duration: 600, delay: 200 }}>
				<!-- Progress Bar -->
				<div class="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 -z-10">
					<div class="h-full bg-slate-900 transition-all duration-500 ease-out"
						style="width: {((currentStep) / (content.steps.length - 1)) * 100}%" />
				</div>

				<!-- Steps -->
				<div class="flex justify-between items-start">
					{#each content.steps as step, index}
						{@const isActive = index === currentStep}
						{@const isCompleted = index < currentStep}
						{@const isClickable = index <= currentStep}

						<!-- Step Indicator -->
						<div class="flex flex-col items-center cursor-pointer transition-all duration-300 {
							isClickable ? 'hover:opacity-80' : ''
						}" on:click={() => isClickable && (currentStep = index)}>
							<div class="relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 mb-3 {
								isCompleted 
									? 'bg-slate-900 border-slate-900 text-white' 
									: isActive 
										? 'bg-white border-slate-900 text-slate-900 shadow-lg' 
										: 'bg-white border-slate-300 text-slate-400'
							}">
								{#if isCompleted}
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
									</svg>
								{:else}
									<span class="font-semibold text-sm">{index + 1}</span>
								{/if}
							</div>

							<div class="text-center">
								<h3 class="text-sm font-medium transition-colors duration-300 {
									isActive ? 'text-slate-900' : 'text-slate-500'
								}">
									{step.title}
								</h3>
								<p class="text-xs text-slate-400 mt-1 max-w-24">
									{step.subtitle}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Form Content -->
			<div class="bg-white rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
				<div class="p-8 md:p-12">
					{#key currentStep}
						<div in:fly={{ x: 50, duration: 400 }} out:fly={{ x: -50, duration: 400 }}>
							{#if currentStep === 0}
								<!-- Step 1: Basic Info -->
								<div class="space-y-6">
									<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label for="firstName" class="block text-sm font-medium text-slate-700 mb-2">First Name</label>
											<input 
												id="firstName"
												bind:value={formData.firstName}
												on:focus={() => focusedField = 'firstName'}
												on:blur={() => focusedField = null}
												type="text" 
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 {errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}"
												placeholder="Your first name"
											/>
											{#if errors.firstName}
												<p class="text-red-500 text-sm mt-1">{errors.firstName}</p>
											{/if}
										</div>
										
										<div>
											<label for="lastName" class="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
											<input 
												id="lastName"
												bind:value={formData.lastName}
												on:focus={() => focusedField = 'lastName'}
												on:blur={() => focusedField = null}
												type="text" 
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 {errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}"
												placeholder="Your last name"
											/>
											{#if errors.lastName}
												<p class="text-red-500 text-sm mt-1">{errors.lastName}</p>
											{/if}
										</div>
									</div>

									<label for="email" class="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
									<input 
										id="email"
										bind:value={formData.email}
										on:focus={() => focusedField = 'email'}
										on:blur={() => focusedField = null}
										type="email" 
										class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 {errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}"
										placeholder="your.email@example.com"
									/>
									{#if errors.email}
										<p class="text-red-500 text-sm mt-1">{errors.email}</p>
									{/if}

									<div>
										<label for="phone" class="block text-sm font-medium text-slate-700 mb-2">
											Phone Number 
											<span class="text-slate-500 font-normal">(optional)</span>
										</label>
										<input 
											id="phone"
											bind:value={formData.phone}
											on:focus={() => focusedField = 'phone'}
											on:blur={() => focusedField = null}
											type="tel" 
											class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 {errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}"
											placeholder="07123 456789"
										/>
										{#if errors.phone}
											<p class="text-red-500 text-sm mt-1">{errors.phone}</p>
										{/if}
									</div>
								</div>

							{:else if currentStep === 1}
								<!-- Step 2: Practice Details -->
								<div class="space-y-6">
									<div>
										<label class="block text-sm font-medium text-slate-700 mb-2">What type of practice do you run?</label>
										<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
											{#each content.practiceTypes as type}
												<button
													type="button"
													on:click={() => updateField('practiceType', type)}
													class="p-4 text-left border rounded-xl transition-all duration-200 {
														formData.practiceType === type 
															? 'border-blue-500 bg-blue-50 text-blue-900' 
															: 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
													}"
												>
													{type}
												</button>
											{/each}
										</div>
										{#if errors.practiceType}
											<p class="text-red-500 text-sm mt-2">{errors.practiceType}</p>
										{/if}
									</div>

									<div>
										<label class="block text-sm font-medium text-slate-700 mb-2">What stage is your practice at?</label>
										<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
											{#each content.practiceStages as stage}
												<button
													type="button"
													on:click={() => updateField('practiceStage', stage)}
													class="p-4 text-left border rounded-xl transition-all duration-200 {
														formData.practiceStage === stage 
															? 'border-blue-500 bg-blue-50 text-blue-900' 
															: 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
													}"
												>
													{stage}
												</button>
											{/each}
										</div>
										{#if errors.practiceStage}
											<p class="text-red-500 text-sm mt-2">{errors.practiceStage}</p>
										{/if}
									</div>
									
									<div>
										<label for="currentWebsite" class="block text-sm font-medium text-slate-700 mb-2">Current Website (optional)</label>
										<input 
											id="currentWebsite"
											bind:value={formData.currentWebsite}
											type="url" 
											class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
											placeholder="https://your-current-website.com"
										/>
										<p class="text-sm text-slate-500 mt-1">If you have an existing website, I'd love to take a look</p>
									</div>
								</div>

							{:else if currentStep === 2}
								<!-- Step 3: Project Details -->
								<div class="space-y-6">
									<div>
										<label class="block text-sm font-medium text-slate-700 mb-3">What services do you need? (Select all that apply)</label>
										<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
											{#each content.serviceOptions as service}
												<button
													type="button"
													on:click={() => toggleService(service)}
													class="p-4 text-left border rounded-xl transition-all duration-200 flex items-center gap-3 {
														formData.services.includes(service) 
															? 'border-blue-500 bg-blue-50 text-blue-900' 
															: 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
													}"
												>
													<div class="w-5 h-5 rounded border-2 flex items-center justify-center {
														formData.services.includes(service) 
															? 'border-blue-500 bg-blue-500 text-white' 
															: 'border-slate-300'
													}">
														{#if formData.services.includes(service)}
															<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
																<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
															</svg>
														{/if}
													</div>
													{service}
												</button>
											{/each}
										</div>
										{#if errors.services}
											<p class="text-red-500 text-sm mt-2">{errors.services}</p>
										{/if}
									</div>

									<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label for="timeline" class="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
											<select 
												id="timeline"
												bind:value={formData.timeline}
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
											>
												<option value="">Select timeline</option>
												<option value="ASAP">ASAP</option>
												<option value="Within 1 month">Within 1 month</option>
												<option value="1-3 months">1-3 months</option>
												<option value="3-6 months">3-6 months</option>
												<option value="No rush">No rush</option>
											</select>
											{#if errors.timeline}
												<p class="text-red-500 text-sm mt-1">{errors.timeline}</p>
											{/if}
										</div>

										<div>
											<label for="budget" class="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
											<select 
												id="budget"
												bind:value={formData.budget}
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
											>
												<option value="">Select budget</option>
												{#each content.budgetRanges as range}
													<option value={range}>{range}</option>
												{/each}
											</select>
											{#if errors.budget}
												<p class="text-red-500 text-sm mt-1">{errors.budget}</p>
											{/if}
										</div>
									</div>

									<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label for="preferredDate" class="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
											<select 
												id="preferredDate"
												bind:value={formData.preferredDate}
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
											>
												<option value="">Select a date</option>
												{#each availableDates as date}
													<option value={date.value}>{date.label}</option>
												{/each}
											</select>
											{#if errors.preferredDate}
												<p class="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
											{/if}
										</div>

										<div>
											<label for="preferredTime" class="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
											<select 
												id="preferredTime"
												bind:value={formData.preferredTime}
												class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
											>
												<option value="">Select a time</option>
												{#each content.timeSlots as time}
													<option value={time}>{time}</option>
												{/each}
											</select>
											{#if errors.preferredTime}
												<p class="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
											{/if}
										</div>
									</div>

									<div>
										<label for="message" class="block text-sm font-medium text-slate-700 mb-2">Additional Message (optional)</label>
										<textarea 
											id="message"
											bind:value={formData.message}
											rows="4"
											class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
											placeholder="Tell me more about your project, any specific requirements, or questions you have..."
										></textarea>
									</div>

									<div class="bg-blue-50 rounded-xl p-6">
										<h4 class="font-semibold text-blue-900 mb-2">{content.nextSteps.title}</h4>
										<ul class="text-blue-800 space-y-1 text-sm">
											{#each content.nextSteps.steps as step}
												<li>✓ {step}</li>
											{/each}
										</ul>
									</div>
								</div>
							{/if}
						</div>
					{/key}
				</div>

				<!-- Navigation -->
				<div class="flex justify-between items-center px-8 md:px-12 py-6">
					<button 
						on:click={prevStep}
						disabled={currentStep === 0}
						class="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 {
							currentStep === 0
								? 'text-slate-400 cursor-not-allowed' 
								: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
						}"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
						</svg>
						<span>Back</span>
					</button>

					<div class="text-sm text-slate-500 font-medium">
						Step {currentStep + 1} of {content.steps.length}
					</div>

					{#if currentStep === content.steps.length - 1}
						<button 
							on:click={handleSubmit}
							disabled={isSubmitting}
							class="flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 {
								isSubmitting
									? 'bg-green-600 text-white cursor-not-allowed'
									: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
							}"
						>
							{#if isSubmitting}
								<svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								<span>Submitting...</span>
							{:else}
								<span>Book Discovery Call</span>
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
								</svg>
							{/if}
						</button>
					{:else}
						<button 
							on:click={nextStep}
							class="flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
						>
							<span>Continue</span>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
							</svg>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	/* Custom focus styles for better UX */
	input:focus, 
	select:focus, 
	textarea:focus {
		outline: none;
	}
	
	/* Smooth animations for form transitions */
	.form-transition {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Custom checkbox animation */
	input[type="checkbox"]:checked {
		animation: checkmark 0.2s ease-in-out;
	}
	
	@keyframes checkmark {
		0% { transform: scale(0.8); }
		50% { transform: scale(1.1); }
		100% { transform: scale(1); }
	}
	
	/* Progress bar animation */
	@keyframes progress-fill {
		from { 
			width: 0%;
			opacity: 0;
		}
		to { 
			width: var(--progress-width);
			opacity: 1;
		}
	}
	
	/* Floating elements subtle animation */
	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}

	/* Smooth transitions */
	.transition-all {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
