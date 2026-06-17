// ============================================================
// THE CONFIDENT VOICE ACADEMY — Auto Form Creator
// Instructions:
//   1. Go to script.google.com
//   2. Click "New project"
//   3. Delete all existing code in the editor
//   4. Paste this entire script
//   5. Click the Save icon, then click Run (the play button)
//   6. Approve permissions when prompted
//   7. When done, click "Execution log" at the bottom
//   8. Copy the Form URL from the log and paste it into your website
// ============================================================

function createEnrolmentForm() {

  var form = FormApp.create('The Confident Voice Academy — Student Enrolment Form 2026');

  form.setDescription(
    'Dear Parent / Guardian, please complete all sections before the first session. ' +
    'All information is kept strictly confidential.'
  );

  form.setConfirmationMessage(
    'Thank you for trusting The Confident Voice Academy with your child\'s journey. ' +
    'We are honoured to be part of their transformation. Malini will be in touch with you shortly.'
  );

  // ===================================================
  // SECTION 1: STUDENT DETAILS
  // ===================================================
  form.addSectionHeaderItem()
    .setTitle('Section 1: Student Details');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Preferred Name or Nickname')
    .setRequired(false);

  form.addDateItem()
    .setTitle('Date of Birth')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Age')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Gender')
    .setRequired(false);

  form.addTextItem()
    .setTitle('School Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Grade or Year')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Home Address')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Language spoken at home')
    .setChoiceValues(['English', 'Hindi', 'Arabic', 'Other'])
    .setRequired(false);

  // ===================================================
  // SECTION 2: PARENT / GUARDIAN DETAILS
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 2: Parent or Guardian Details');

  form.addTextItem()
    .setTitle('Parent or Guardian Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Relationship to Student')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Mobile Number')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email Address')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Secondary Contact Name')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Secondary Contact Number')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Preferred communication method')
    .setChoiceValues(['WhatsApp', 'Email', 'Phone Call', 'SMS'])
    .setRequired(false);

  // ===================================================
  // SECTION 3: SPEAKING BACKGROUND & LEARNING PROFILE
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 3: Speaking Background and Learning Profile');

  form.addMultipleChoiceItem()
    .setTitle('How would you describe your child currently?')
    .setChoiceValues(['Very Shy', 'Shy-ish', 'Average', 'Getting Bold', 'Confident'])
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Has your child done public speaking before?')
    .setChoiceValues(['Yes, formally', 'Yes, informally', 'No, this is the first time'])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('What is the main reason you enrolled your child in this course?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What specific challenge does your child face with speaking or communication?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('What would success look like for your child at the end of 4 weeks?')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('How does your child best learn?')
    .setChoiceValues([
      'Visual, watching',
      'Listening',
      'Hands-on activities',
      'Reading and writing',
      'Mix of all'
    ])
    .setRequired(false);

  // ===================================================
  // SECTION 4: SPECIAL TALENTS, ACHIEVEMENTS & SUPERPOWERS
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 4: Special Talents, Achievements and Superpowers')
    .setHelpText(
      'This is my favourite section. I will use this to personalise your child\'s ' +
      'experience and help them find their own story to tell.'
    );

  form.addParagraphTextItem()
    .setTitle('Special Talents — What is your child remarkably good at?')
    .setHelpText('e.g. drawing, coding, singing, sports, gaming...')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Academic or School Achievements')
    .setHelpText('Any awards, high grades, competitions, or school recognition.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Creative or Performing Arts')
    .setHelpText('Any involvement in drama, music, dance, art, writing, or storytelling.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Sports or Physical Achievements')
    .setHelpText('Any sports, martial arts, athletics, or competitions.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Digital or Tech Talents')
    .setHelpText('Coding, YouTube channel, gaming, social media, or design.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Community or Leadership')
    .setHelpText('Any volunteering, leadership roles, community projects, or causes they care about.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('One thing your child is proud of about themselves')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('One thing you, the parent, are most proud of about your child')
    .setRequired(false);

  // ===================================================
  // SECTION 5: HEALTH, SAFETY & SPECIAL REQUIREMENTS
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 5: Health, Safety and Special Requirements');

  form.addMultipleChoiceItem()
    .setTitle('Does your child have any medical conditions we should be aware of?')
    .setChoiceValues(['No', 'Yes, please see details below'])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('If yes, please provide details of the medical condition')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Does your child have any disability or learning differences?')
    .setChoiceValues(['Yes', 'No', 'Other, please specify below'])
    .setRequired(false);

  form.addTextItem()
    .setTitle('If other, please specify')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Any allergies, food, materials, or environment?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Any additional requirements or information we should know?')
    .setRequired(false);

  // ===================================================
  // SECTION 6: CONSENTS & PERMISSIONS
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 6: Consents and Permissions');

  form.addMultipleChoiceItem()
    .setTitle(
      'I give permission for my child to be photographed or filmed during sessions ' +
      'for internal course use and progress tracking.'
    )
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle(
      'I consent to the above media being shared on The Confident Voice Academy\'s ' +
      'social media and promotional materials.'
    )
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle(
      'I understand that a beginning-and-end video comparison may be shown ' +
      'to my child and family, not publicly.'
    )
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);

  // ===================================================
  // SECTION 7: ANYTHING ELSE?
  // ===================================================
  form.addPageBreakItem()
    .setTitle('Section 7: Anything Else?');

  form.addParagraphTextItem()
    .setTitle('Is there anything specific you would like us to focus on for your child?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Any questions for us before the course begins?')
    .setRequired(false);

  // ===================================================
  // DONE — log the shareable link
  // ===================================================
  Logger.log('===========================================');
  Logger.log('Form created successfully.');
  Logger.log('');
  Logger.log('Share this link with parents:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('Edit the form yourself here:');
  Logger.log(form.getEditUrl());
  Logger.log('===========================================');

}
