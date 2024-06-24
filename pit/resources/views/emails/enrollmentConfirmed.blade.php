
<!DOCTYPE html>
<html>
<head>
    <title>Enrollment Confirmed</title>
</head>
<body>
    <img src="{{ $message->embed(public_path('nnnbanner4.png')) }}" alt="NNN Banner" style="max-width: 600px; height: auto;">
    <h1>Congratulations!</h1>
    <p>{!! $mailMessage !!}</p>
</body>
</html>
