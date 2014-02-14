/* Clear SMS Backup+ from Inbox
   by Michael Morgenstern // everythingisfilm.com
   
   SMS Backup+ is an Android app that backs up all text messages and
   phone calls to your Gmail through an IMAP interface.
   My texts and calls were cluttering my Gmail, so I wanted to auto-
   archive them.
   This script runs every minute and looks at the last 30 threads in
   your inbox for "Call with" or "SMS with". It's worth noting that
   it will archive *any* messages with those words in the subject
   line.
*/

function clearSMSFromInbox() {
  var threads = GmailApp.getInboxThreads(0, 30);
  for (var i = 0; i < threads.length; i++) {
    var message = threads[i].getMessages()[0];
    var subject = message.getSubject();
    if( (subject.indexOf("SMS with") != -1) || (subject.indexOf("Call with") != -1) ) {
      GmailApp.moveThreadToArchive(threads[i]);
    }
  }
}
