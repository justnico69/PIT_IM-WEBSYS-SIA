<!DOCTYPE html>
<html>
<head>
    <title>{{ $subject }}</title>
</head>
<body>
    <img src="{{ $message->embed(public_path('nnnbanner3.png')) }}" alt="Congratulations" style="max-width: 500px; height: auto;">
    <h3>{{ $subject }}</h3>
    <p>{!! $mailMessage !!}</p>
</body>
</html>
