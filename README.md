clear-sms-from-gmail-inbox
==========================

A Google Script to automatically clear stored SMS &amp; calls from the SMS Backup+ Android app

Instructions to use:
1. Install SMS Backup+ on your Android device if you haven't already
2. Visit https://script.google.com
3. Choose "Blank Project" in the left pane
4. Paste the code from clearSMSfromInbox.gs into your project
5. Go to Resources -> Current Project's Triggers, saving your script with the name of your choice when prompted.
6. Click "Click here to add one now."
7. Choose "Minutes Timer" and "Every Minute" (or choose your preferred interval)
8. Hit "Continue" and "Accept" to authorize the script to access Gmail
9. You're done! Now the script will automatically clear your inbox.

NOTE: To clear your enitre inbox the first time this is run, change the line "GmailApp.getInboxThreads(0, 30)" to GmailApp.getInboxThreads() and run the function. Then change it back.
Also, this will miss SMS's if you get more than 30 SMS+calls+emails in a minute. Not likely, but if you will you can just change the number.
