export const notes = [
  {
    id: 1,
    patientName: "John Doe",
    date: "02/19/25",
    time: "3:19pm",
    duration: "(2 min)",
    summary: "sore throat with fever",
    selected: true,
    oneLiner: "Past medical history of hypertension and type 2 diabetes; currently taking Tylenol as needed.",
    assessmentPlan: `Acute Upper Respiratory Tract Infection
40-year-old male with hypertension and type 2 diabetes presenting with a 2-day history of fever (102°F, 39°C), cough, sore throat, chills, and myalgia. Physical examination reveals pharyngeal erythema. Lung sounds are normal. Heart is regular rate and rhythm with normal S1 and S2. Respiratory rate 12, O2 saturation 99% on room air. The clinician suspects a viral etiology based on the constellation of symptoms and physical findings.
- Ordered influenza test
- Ordered COVID-19 test
- Ordered strep throat test
- Continue acetaminophen as needed for symptomatic relief
- Rest and increased fluid intake recommended
- Clinician to call patient with test results and further management instructions`,
    patientInstructions: `Dear Mr. John Doe,

Thank you for visiting the clinic today. I appreciate your commitment to addressing your health concerns promptly. Based on our consultation, here are the key instructions and recommendations for your care:

- Laboratory Tests: I have ordered a flu test, COVID test, and a strep throat test to better understand the cause of your symptoms.
- Medications: Continue taking Tylenol as needed for fever and discomfort.
- Self-Care Recommendations:
  - Get ample rest.
  - Drink plenty of water to stay hydrated.
- Follow-Up: I will contact you with the results of your tests to discuss if any further medication or treatment is needed.

Please feel free to reach out if you have any questions or if your symptoms worsen. I hope you start feeling better soon.

Best regards,

[Your Healthcare Provider's Name]`
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "02/18/25",
    time: "10:45am",
    duration: "(15 min)",
    summary: "annual checkup, blood pressure concerns",
    selected: false,
    oneLiner: "Past medical history of hypertension; currently taking lisinopril daily.",
    assessmentPlan: `Annual Wellness Visit with Hypertension Management
45-year-old female with a history of hypertension presenting for her annual checkup, expressing concerns about recent fluctuations in blood pressure. Reports occasional headaches and fatigue. Blood pressure today is 145/90 mmHg. Heart is regular rate and rhythm with no murmurs. Lungs clear to auscultation. No edema in extremities. Current medication (lisinopril 10 mg daily) appears to need adjustment based on readings.
- Ordered complete blood count (CBC) and lipid panel
- Blood pressure monitoring at home recommended
- Increase lisinopril to 20 mg daily
- Lifestyle modifications: reduce salt intake, increase physical activity (30 min most days)
- Follow-up appointment in 4 weeks to reassess blood pressure control`,
    patientInstructions: `Dear Ms. Jane Smith,

It was great seeing you for your annual checkup today. I’m glad we had the chance to address your blood pressure concerns. Here’s a summary of our plan moving forward:

- Laboratory Tests: I’ve ordered a CBC and lipid panel to check your overall health.
- Medications: Please increase your lisinopril dose to 20 mg daily starting tomorrow.
- Self-Care Recommendations:
  - Monitor your blood pressure at home twice daily (morning and evening) and keep a log.
  - Try to lower salt in your diet and aim for 30 minutes of exercise most days.
- Follow-Up: Let’s schedule a visit in 4 weeks to review your progress.

Please don’t hesitate to contact me if you notice any unusual symptoms or have questions about these changes. Take care!

Best regards,

[Your Healthcare Provider's Name]`
  },
  {
    id: 3,
    patientName: "Robert Johnson",
    date: "02/17/25",
    time: "2:30pm",
    duration: "(5 min)",
    summary: "medication refill request",
    selected: false,
    oneLiner: "Past medical history of asthma; currently using albuterol inhaler as needed.",
    assessmentPlan: `Medication Refill Request
50-year-old male with a history of asthma requesting a refill of his albuterol inhaler. Reports stable symptoms with occasional wheezing triggered by cold weather, managed effectively with current regimen. Last refill was 3 months ago, and usage aligns with as-needed dosing. No recent exacerbations or emergency visits reported. Lungs clear today with no wheezing noted.
- Refilled albuterol inhaler (90 mcg, 200 puffs), 1-2 puffs as needed every 4-6 hours
- Reviewed proper inhaler technique
- Advised to monitor symptoms and seek care if wheezing increases or shortness of breath occurs
- Annual asthma review recommended in 6 months`,
    patientInstructions: `Dear Mr. Robert Johnson,

Thanks for stopping by today to address your medication needs. I’ve renewed your prescription, and here are the details for your care:

- Medications: Your albuterol inhaler has been refilled (90 mcg, 200 puffs). Use 1-2 puffs as needed every 4-6 hours for wheezing or shortness of breath.
- Self-Care Recommendations:
  - Keep using your inhaler as we discussed—make sure to shake it well before each use.
  - Watch for any increase in wheezing or difficulty breathing, and reach out if that happens.
- Follow-Up: Let’s plan an asthma check-in in 6 months, unless you need to see me sooner.

Feel free to call if you have any questions about your inhaler or symptoms. Stay well!

Best regards,

[Your Healthcare Provider's Name]`
  }
];

export const currentPatient = {
  name: "John Doe",
  oneLiner: "One Liner",
  medicalHistory: "Past medical history of hypertension and type 2 diabetes; currently taking Tylenol as needed."
};

export const assessmentPlan = {
  title: "Assessment & Plan",
  content: `Acute Upper Respiratory Tract Infection
40-year-old male with hypertension and type 2 diabetes presenting with a 2-day history of fever (102°F, 39°C), cough, sore throat, chills, and myalgia. Physical examination reveals pharyngeal erythema. Lung sounds are normal. Heart is regular rate and rhythm with normal S1 and S2. Respiratory rate 12, O2 saturation 99% on room air. The clinician suspects a viral etiology based on the constellation of symptoms and physical findings.
- Ordered influenza test
- Ordered COVID-19 test
- Ordered strep throat test
- Continue acetaminophen as needed for symptomatic relief
- Rest and increased fluid intake recommended
- Clinician to call patient with test results and further management instructions`
};

export const patientInstructions = {
  title: "Patient Instructions",
  date: "February 19, 2025",
  content: `Dear Mr. John Doe,

Thank you for visiting the clinic today. I appreciate your commitment to addressing your health concerns promptly. Based on our consultation, here are the key instructions and recommendations for your care:

- Laboratory Tests: I have ordered a flu test, COVID test, and a strep throat test to better understand the cause of your symptoms.
- Medications: Continue taking Tylenol as needed for fever and discomfort.
- Self-Care Recommendations:
  - Get ample rest.
  - Drink plenty of water to stay hydrated.
- Follow-Up: I will contact you with the results of your tests to discuss if any further medication or treatment is needed.

Please feel free to reach out if you have any questions or if your symptoms worsen. I hope you start feeling better soon.

Best regards,

[Your Healthcare Provider's Name]`
}; 