export const notes = [
  {
    id: 1,
    patientName: 'Don Joh',
    date: '02/19/25',
    time: '3:19pm',
    duration: '(2 min)',
    summary: 'sore throat with fever',
    selected: true,
    oneLiner: 'Past medical history of hypertension and type 2 diabetes; currently taking Tylenol as needed.',
    visitSummary: `40-year-old male with a history of hypertension and type 2 diabetes presents with a 2-day history of fever (102°F), sore throat, cough, chills, and muscle aches.
Physical examination reveals pharyngeal erythema, with normal lung sounds and heart rhythm.
Vital signs include a temperature of 39°C, respiratory rate of 12 breaths per minute, and O2 saturation of 99% on room air.
The clinician suspects a viral upper respiratory tract infection and has ordered influenza, COVID-19, and strep throat tests.
The patient is advised to continue taking acetaminophen as needed, rest, and increase fluid intake.`,
    subjectiveNotes: `40-year-old male presents with sore throat, fever, and cough that started 2 days ago.
The patient reports associated symptoms of chills and muscle aches.
He denies any recent sick contacts but has been going to work.
The patient's temperature at home reached 102 degrees Fahrenheit.
He denies any shortness of breath or wheezing.
The patient has been taking Tylenol a couple of times today for symptom relief.

Medical History
- Hypertension
- Type 2 Diabetes

Current and Past Medications and Supplements
- Tylenol (as needed)

Social History
- Occupation: employed, occupation not specified

Review of Systems
- General: Fever, chills, muscle aches
- Respiratory: Cough, no shortness of breath, no wheezing
- ENT: Sore throat`,
    objectiveNotes: `Vital Signs
- Respiratory rate: 12 breaths per minute
- O2 saturation: 99% on room air
- Temperature: 39 degrees Celsius

Physical Examination
- Head, Eyes, Ears, Nose, Throat: Erythema noted in the back of the throat.
- Cardiovascular: Heart is regular rate and rhythm with normal S1 and S2.
- Respiratory: Lung sound normal.`,
    assessmentPlan: `Acute Upper Respiratory Tract Infection
40-year-old male with hypertension and type 2 diabetes presenting with a 2-day history of fever (102°F, 39°C), cough, sore throat, chills, and myalgia.
Physical examination reveals pharyngeal erythema.
Lung sounds are normal.
Heart is regular rate and rhythm with normal S1 and S2.
Respiratory rate 12, O2 saturation 99% on room air.
The clinician suspects a viral etiology based on the constellation of symptoms and physical findings.
- Ordered influenza test
- Ordered COVID-19 test
- Ordered strep throat test
- Continue acetaminophen as needed for symptomatic relief
- Rest and increased fluid intake recommended
- Clinician to call patient with test results and further management instructions`,
    patientInstructions: `Dear Mr. Don Joh,

Thank you for visiting the clinic today.
I appreciate your commitment to addressing your health concerns promptly.
Based on our consultation, here are the key instructions and recommendations for your care:

- Laboratory Tests: I have ordered a flu test, COVID test, and a strep throat test to better understand the cause of your symptoms.
- Medications: Continue taking Tylenol as needed for fever and discomfort.
- Self-Care Recommendations:
  - Get ample rest.
  - Drink plenty of water to stay hydrated.
- Follow-Up: I will contact you with the results of your tests to discuss if any further medication or treatment is needed.

Please feel free to reach out if you have any questions or if your symptoms worsen.
I hope you start feeling better soon.

Best regards,

[Your Healthcare Provider's Name]`,
    transcriptSummary: `Mr. Don Joh, a 40-year-old male with hypertension and type 2 diabetes, presents with a sore throat, fever, cough, chills, and muscle aches starting 2 days ago.
His temperature at home was 102 degrees.
He has no shortness of breath or wheezing and has been taking Tylenol a couple of times today.

Physical exam:
- Respiratory rate: 12
- O2 saturation: 99% on room air
- Oral temperature: 39 degrees Celsius
- Erythema in the back of the throat
- Normal lung sounds
- Heart: regular rate and rhythm with normal S1 and S2

Assessment:
- Likely viral infection

Plan:
- Ordering flu test, COVID test, and strep throat test
- Continue Tylenol as needed
- Rest and hydrate

Follow-up:
- Will call with test results and further instructions if needed`
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    date: '02/18/25',
    time: '10:45am',
    duration: '(15 min)',
    summary: 'annual checkup, blood pressure concerns',
    selected: false,
    oneLiner: 'Past medical history of hypertension; currently taking lisinopril daily.',
    visitSummary: `45-year-old female with a history of hypertension presents for her annual checkup.
She expresses concerns about recent fluctuations in blood pressure and reports occasional headaches and fatigue.
Physical examination reveals a blood pressure of 145/90 mmHg, heart with regular rate and rhythm, no murmurs, lungs clear to auscultation, and no edema in extremities.`,
    subjectiveNotes: `The patient reports that her blood pressure has been fluctuating recently, with some readings higher than usual.
She mentions experiencing occasional headaches and feeling more tired than usual.
She has been taking her lisinopril as prescribed but is concerned about the effectiveness.`,
    objectiveNotes: `Vital Signs: BP 145/90 mmHg, HR 78, Temp 36.8°C, RR 14, O2 sat 98%.
Physical exam: Heart regular rate and rhythm, no murmurs.
Lungs clear to auscultation.
No edema in extremities.`,
    assessmentPlan: `Annual Wellness Visit with Hypertension Management
45-year-old female with a history of hypertension presenting for her annual checkup, expressing concerns about recent fluctuations in blood pressure.
Reports occasional headaches and fatigue.
Blood pressure today is 145/90 mmHg.
Heart is regular rate and rhythm with no murmurs.
Lungs clear to auscultation.
No edema in extremities.
Current medication (lisinopril 10 mg daily) appears to need adjustment based on readings.
- Ordered complete blood count (CBC) and lipid panel
- Blood pressure monitoring at home recommended
- Increase lisinopril to 20 mg daily
- Lifestyle modifications: reduce salt intake, increase physical activity (30 min most days)
- Follow-up appointment in 4 weeks to reassess blood pressure control`,
    patientInstructions: `Dear Ms. Jane Smith,

It was great seeing you for your annual checkup today.
I’m glad we had the chance to address your blood pressure concerns.
Here’s a summary of our plan moving forward:

- Laboratory Tests: I’ve ordered a CBC and lipid panel to check your overall health.
- Medications: Please increase your lisinopril dose to 20 mg daily starting tomorrow.
- Self-Care Recommendations:
  - Monitor your blood pressure at home twice daily (morning and evening) and keep a log.
  - Try to lower salt in your diet and aim for 30 minutes of exercise most days.
- Follow-Up: Let’s schedule a visit in 4 weeks to review your progress.

Please don’t hesitate to contact me if you notice any unusual symptoms or have questions about these changes.
Take care!

Best regards,

[Your Healthcare Provider's Name]`,
    transcriptSummary: `Ms. Jane Smith, a 45-year-old female with hypertension, presents for annual checkup with concerns about blood pressure fluctuations, headaches, and fatigue.
BP today is 145/90.
Plan: Adjust lisinopril to 20 mg daily, order CBC and lipid panel, recommend home BP monitoring and lifestyle changes, follow-up in 4 weeks.`
  },
  {
    id: 3,
    patientName: 'Robert Johnson',
    date: '02/17/25',
    time: '2:30pm',
    duration: '(5 min)',
    summary: 'medication refill request',
    selected: false,
    oneLiner: 'Past medical history of asthma; currently using albuterol inhaler as needed.',
    visitSummary: `50-year-old male with a history of asthma presents requesting a refill of his albuterol inhaler.
He reports stable symptoms with occasional wheezing triggered by cold weather, managed effectively with current regimen.
No recent exacerbations or emergency visits.
Physical examination shows lungs clear with no wheezing.`,
    subjectiveNotes: `The patient states that his asthma has been under control with the current medication.
He uses the albuterol inhaler as needed, mainly when exposed to cold air, which triggers mild wheezing.
He denies any recent asthma attacks or need for urgent care.`,
    objectiveNotes: `Vital Signs: BP 118/76, HR 70, Temp 36.6°C, RR 12, O2 sat 99%.
Physical exam: Lungs clear to auscultation, no wheezing or crackles.
Heart regular rate and rhythm.`,
    assessmentPlan: `Medication Refill Request
50-year-old male with a history of asthma requesting a refill of his albuterol inhaler.
Reports stable symptoms with occasional wheezing triggered by cold weather, managed effectively with current regimen.
Last refill was 3 months ago, and usage aligns with as-needed dosing.
No recent exacerbations or emergency visits reported.
Lungs clear today with no wheezing noted.
- Refilled albuterol inhaler (90 mcg, 200 puffs), 1-2 puffs as needed every 4-6 hours
- Reviewed proper inhaler technique
- Advised to monitor symptoms and seek care if wheezing increases or shortness of breath occurs
- Annual asthma review recommended in 6 months`,
    patientInstructions: `Dear Mr. Robert Johnson,

Thanks for stopping by today to address your medication needs.
I’ve renewed your prescription, and here are the details for your care:

- Medications: Your albuterol inhaler has been refilled (90 mcg, 200 puffs).
Use 1-2 puffs as needed every 4-6 hours for wheezing or shortness of breath.
- Self-Care Recommendations:
  - Keep using your inhaler as we discussed—make sure to shake it well before each use.
  - Watch for any increase in wheezing or difficulty breathing, and reach out if that happens.
- Follow-Up: Let’s plan an asthma check-in in 6 months, unless you need to see me sooner.

Feel free to call if you have any questions about your inhaler or symptoms.
Stay well!

Best regards,

[Your Healthcare Provider's Name]`,
    transcriptSummary: `Mr. Robert Johnson, a 50-year-old male with asthma, requests albuterol refill.
Reports stable symptoms, occasional cold-induced wheezing.
Lungs clear today.
Plan: Refill albuterol inhaler, review inhaler technique, advise monitoring symptoms, annual asthma review in 6 months.`
  },
  {
    id: 4,
    patientName: 'Alice Brown',
    date: '02/20/25',
    time: '11:00am',
    duration: '(10 min)',
    summary: 'follow-up for diabetes management',
    selected: false,
    oneLiner: 'Past medical history of type 2 diabetes; currently taking metformin.',
    visitSummary: `50-year-old female with a history of type 2 diabetes presents for a follow-up visit.
She reports good adherence to her medication regimen and diet.
Recent blood sugar levels have been within target range.
Physical examination shows no acute findings.
Vital signs are stable.`,
    subjectiveNotes: `The patient states that she has been taking her metformin as prescribed and following a low-carb diet.
She denies any episodes of hypoglycemia or hyperglycemia.
She mentions occasional fatigue but attributes it to work stress.`,
    objectiveNotes: `Vital Signs: BP 120/80, HR 72, Temp 36.5°C, RR 16, O2 sat 98%.
Physical exam: Heart regular rate and rhythm, lungs clear, abdomen soft and non-tender, no edema in extremities.`,
    assessmentPlan: `Type 2 Diabetes Mellitus, well-controlled.
Continue current management with metformin 500 mg twice daily.
Encourage ongoing lifestyle modifications.
Ordered HbA1c test to monitor long-term glucose control.
Follow-up in 3 months.`,
    patientInstructions: `Dear Ms. Alice Brown,

It was good to see you today for your diabetes follow-up.
Your blood sugar levels are looking great, and I'm pleased with your progress.
Please continue taking metformin as prescribed and keep up with your healthy diet and exercise.
We've ordered an HbA1c test to check your average blood sugar over the past few months.
Let's schedule another visit in 3 months to review the results.
If you have any concerns before then, don’t hesitate to reach out.

Take care!

Best regards,

[Your Healthcare Provider's Name]`,
    transcriptSummary: `Ms. Alice Brown, a 50-year-old female with type 2 diabetes, presents for follow-up.
She reports adherence to medication and diet, with stable blood sugar levels.
No acute issues noted.
Plan: Continue metformin, order HbA1c, follow-up in 3 months.`
  }
]; 
