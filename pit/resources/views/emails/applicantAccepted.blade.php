<!DOCTYPE html>
<html>
<head>
    <title>{{ $subject }}</title>
</head>
<body>
    <img src="{{ $message->embed(public_path('nnnbanner4.png')) }}" alt="NNN Banner" style="max-width: 700px; height: auto;">
    <h3>{{ $subject }}</h3>
    <p>{!! $mailMessage !!}</p>
</body>
</html>
