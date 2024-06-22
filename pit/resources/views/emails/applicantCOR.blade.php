<!-- resources/views/emails/applicantCOR.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Certificate of Registration</title>
</head>
<body>
    <h1>Certificate of Registration</h1>
    <p>Dear {{ $student->firstName }},</p>
    <p>Please find attached your Certificate of Registration.</p>
    <img src="{{ $message->embed(public_path('cor.png')) }}" alt="NNN Banner" style="max-width: 600px; height: auto;">
</body>
</html>
